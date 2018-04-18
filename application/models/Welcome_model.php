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
         public function get_user_photo(){
            $sql = 'SELECT  * FROM `t_user` WHERE user_id >= ((SELECT MAX(user_id) FROM t_user)-(SELECT MIN(user_id) FROM t_user)) * RAND() + (SELECT MIN(user_id) FROM t_user) LIMIT 12
                 LEFT JOIN `t_photo` ON `t_user`.user_id = `books`.user_id  AND `t_photo`.status = true 
                 LEFT JOIN  `t_into` ON `t_user`.user_id = `t_intro` '   ;          
             $query = $this->db->query($sql);
             return $query->result();
        }
        //添加朋友 u_id f_name f_
        public function add_friends($user_id,$accept_id){
            $sql =$this->db->insert('t_friend',array('uid'=>$user_id,'accept'=>$accept_id));
            return $sql->result();//返回受影响的行数
        }
        // 查找好友
        public function find_one($asker,$friend){//需要询问者的u_id和被询问者的u_id
            $sql  = 'SELECT * FROM t_friend WHERE user_id = $asker AND friend_id = $friend';
            $query = $this->db->query($sql);
            return $query->row();
        }
        //  public function SendMessge($message){
        // //    $sql = "insert into message values(NULL ,'{$reciverUid}','{$senderUid}','{$message}','{$time}','1')";       
        //     $sql = $this->insert($message);
        //     return $query->result(); 
        // }
        // // 更新聊天信息
        // public function update_message($ids){
        //     $sql = "update t_message set status = 2 where id in ({$ids})";
        //     $query = $this->db->query($sql);
        //     return $query->result();   
        // }
        // public function getMessage($reciver_uid,$sender_uid){
        //     $sql = "select * from t_message where 
        //     reciver_uid='{$reciver_uid}'
        //      and sender_uid='{$sender_uid}' 
        //      and status='1'";
        //      $query = $this->db->query($sql);
        //      return $query->result();
        // }

        
    }   

?>