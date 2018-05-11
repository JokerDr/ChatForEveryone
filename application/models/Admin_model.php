<?php
    class Admin_model extends CI_Model{
        
        // 添加其他管理员
        // public function add_admin($infor){
        //     $sql = $this->db->insert('admin',$infor);
        //     return $sql->row();
        // }
        // 先昵称搜索用户
    public function name_search($user_name){
        $query = $this->db->get_where('t_user', array('user_name' =>$user_name));
        return $query->result();
    }
        // 删除某用户的图片 
    public function del_admin(){
        $this->db->where_in('photo_id',$user);
        $this->db->delete('t_photo');
        return $this->db->affected_rows();  
    }
    // // 删除用户及其关联的表的所有项
    public function delete_user($user_id){
        // $this->db->where_in('user_id',$user_id);
        // $this->db->delete('t_user');
        // return $this->db->affected_rows();
        $sql = 'DELETE `t_user`,`t_friends`,`t_intro`,`t_message`,`t_photo` ,`t_power` 
                FROM `t_user` 
                LEFT JOIN `t_friends` ON (`t_user`.user_id = `t_friends`.uid  ) AND (`t_friends`.friends =`t_user`.user_id )
                LEFT JOIN `t_intro` ON `t_user`.user_id = `t_intro`.u_id
                LEFT JOIN `t_message` ON (`t_user`.user_id  = `t_message`.reciver_uid) OR (`t_user`.user_id  = `t_message`.sender_uid)
                LEFT JOIN `t_photo` ON `t_user`.user_id  = `t_photo`.u_id
                LEFT JOIN `t_power` ON `t_user`.user_id  = `t_power`.uid 
                WHERE `t_user`.user_id in (' .$user_id. ')' ;
        $query = $this->db->query($sql);
         return $this->db->affected_rows();
    }
    // 获取用户表中所有用户
    public function get_users(){
        // $query = $this->db->get('t_user');
        // return $query->result();
        $sql = 'SELECT  * FROM `t_user`
                 LEFT JOIN `t_photo` ON `t_user`.user_id = `t_photo`.u_id  AND `t_photo`.using_or_not = "using" 
                 LEFT JOIN  `t_intro` ON `t_user`.user_id = `t_intro`.u_id' ;
        $query = $this->db->query($sql);
        return $query->result();   
    }
    // 插入消息
    public function add_message($arr){
            $this->db->insert('t_message',$arr);
            return $this->db->affected_rows();
        }  
    // 删除用户的自我介绍
    public function del_intro_uid($uid){
        $this->db->where_in('u_id',$uid);
        $this->db->delete('t_intro');
        return $this->db->affected_rows();
    }
    // 获取某个用户的所有图片
    public function get_pic_by_uid($uid){
        $query = $this->db->get_where('t_photo', array('u_id' =>$uid));
        return $query->result();
    }
    // 删除某个用户的某个图片
    public function del_pic($uid, $photo_id){
        $this->db->where_in('u_id',$uid);
        $this->db->where_in('photo_id',$photo_id);
        $this->db->delete('t_photo');
        return $this->db->affected_rows();
    }
    // 给每个用户发通知
    // public function notice(){
    //     // $this->db->insert('mytable');
    // }
    // 对单独用户进行通知


    }
?>