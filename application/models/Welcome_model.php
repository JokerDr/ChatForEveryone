<?php

    class Welcome_model extends CI_Model{
        

        public function get_img_url(){
            //取得图片的地址
           $sql = 'SELECT * FROM photo WHERE photo_id IN (
	            select photo_id from scores where score<60
            )';
        }    
         // 删除用户     
        public function del_user($id){   
             $this->db->delete('t_user', array('id' => $id));
             return $this->db->affected_rows();
    }    
        // 通过email来判断用户
         public function get_user_by_email($email){        
             $query = $this->db->get_where('t_user', array('email' => $email));
            return $query->result();
    }
        // 更改姓名
         public function update($id,$name){
              $this->db->where('id', $id);
              $this->db->update('t_user', array(
             "name" => $name,
            ));
             return $this->db->affected_rows();
         }
        //返回随机ID的12个user数据，相应id的自我介绍 。相应id的，且作为头像的图片url  
        public function get_infor_photo(){
            $sql = 'SELECT  * FROM `t_user`
                 LEFT JOIN `t_photo` ON `t_user`.user_id = `t_photo`.u_id  AND `t_photo`.using_or_not = true 
                 LEFT JOIN  `t_intro` ON `t_user`.user_id = `t_intro`.u_id 
                 WHERE (user_id >= ((SELECT MAX(user_id) FROM `t_user`)-(SELECT MIN(user_id) FROM `t_user`)) * RAND() 
                    + (SELECT MIN(user_id) FROM `t_user`) )LIMIT 12'   ;          
             $query = $this->db->query($sql);
             return $query->result();
        }

        // // 昵称搜索,获取其用户表的资料,其自我介绍，其作为头像的图片
        public function name_search($user_name){
             $sql = 'SELECT  * FROM  `t_user` 
                    LEFT JOIN `t_photo` on `t_photo`.u_id = `t_user`.user_id AND `t_photo`.using_or_not = "true"
                    WHERE `t_user`.user_name in ('.$user_name.')';
            // $query = $this->db->get_where('mytable', array('user_name' => $user_name));
            $query = $this->db->query($sql);
            return $query->result();
        }
        // // 条件搜索
        // public function condition($age,$sex,$province){
            
        //     $sql = 'SELECT  * FROM  `t_user` 
        //             LEFT JOIN `t_intro` on `t_intro`.u_id = `t_user`.user_id 
        //             LEFT JOIN `t_photo` on `t_photo`.u_id =`t_user`.user_id AND `t_photo`.using_or_not = true
        //             WHERE  age = '.$age.' AND province ='.$province.' AND sex ='.$sex;
        //     // $query = $this->db->get_where('mytable', array('user_name' => $user_name));
        //     $query = $this->db->query($sql);
        //     return $query->row();
        // }
        // 根据uid,获取其用户表的资料,其自我介绍，其作为头像的图片
        public function get_user_by_uid($uid){
             $sql = 'SELECT  * FROM  `t_user` 
                    LEFT JOIN `t_intro` on `t_intro`.u_id = `t_user`.user_id 
                    LEFT JOIN `t_photo` on `t_photo`.u_id = `t_user`.user_id AND `t_photo`.using_or_not = "true"
                    WHERE `t_user`.user_id in ('.$uid.')';
            // $query = $this->db->get_where('mytable', array('user_name' => $user_name));
            $query = $this->db->query($sql);
            return $query->row();
        }
        
        // 访问权限判断

        //添加朋友 u_id f_name f_
        public function add_friends($user_id,$accept_id){
            $sql =$this->db->insert('t_friend',array('uid'=>$accept_id,'accept'=>$user_id));
            return $sql->result();//返回受影响的行数
        }
        // 查找是否有该好友
        public function visit_someone($asker,$friend){//需要询问者的u_id和被询问者的u_id
             $sql = $this->db->get_where('t_friends',array('uid'=>$friend,'friends'=>$asker));
            return $sql->row();
        }
        //查看关于 是否允许 非朋友用户 访问的自己资料卡 的权限
        //规定： 0->不允许
        //       1->允许
        public function power_visit_me($uid){
            // $sql = 'SELECT  * FROM  `t_power` WHERE `t_power`.power_name in("visit") AND 
            //  `t_power`.uid in('.$uid.')';
            $query = $this->db->get_where('t_power', array('power_name' => 'visit','uid'=>$uid));
            // $query = $this->db->query($sql);
             return $query->row(); 
        }
        // 查询所有该用户的消息的(收到的和发送的)，以及其ID关联的用户信息
        //用户头像
        public function get_message($uid){
            $sql = 'SELECT DISTINCT * FROM  `t_message` 
                    LEFT JOIN `t_user` on `t_message`.sender_uid = `t_user`.user_id 
                    LEFT JOIN `t_photo` on `t_photo`.u_id = `t_message`.sender_uid AND `t_photo`.using_or_not = true
                    WHERE  reciver_uid = '.$uid.' OR sender_uid = '.$uid;
            $query = $this->db->query($sql);
            // var_dump($query);
            // echo count();
            return $query->result();     
        }
        // 获得指定用户的消息的(收到的和发送的)，以及其ID关联的用户信息
        public function chat_with($uid,$other,$time){
             $query =  $this->db->select('*')->from('t_message')
                    ->group_start()
                        ->where(array('reciver_uid'=>$uid,'sender_uid'=>$other,'create_time_YMD'=>$time)) 
                        // ->or_where(array('reciver_uid'=>$other,'sender_uid'=>$uid,'create_time_YMD'=>$time))
                    ->group_end()
                    ->get();         
            return $query->row();    
        }
        // 删除某条消息
        public function del_message($sender,$reciver,$time){
            $arr = array('sender_uid'=>$sender,'reciver_uid'=>$reciver,'create_time_YMD'=>$time);
            $this->db->where($arr);
            $this->db->delete('t_message');
            return $this->db->affected_rows();;
        }
        //删除所有信息{
        public function del_messages($uid){
            $this->db->delete('t_message',array('reciver_uid'=>$uid));
            return $this->db->affected_rows();
        }
        // 插入信息
        public function add_message($arr){
            $this->db->insert('t_message',$arr);
            return $this->db->affected_rows();
        }
    }   

?>