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
    // // 删除用户
    // public function delete_user($user){
    //     $this->db->where_in('user_id',$user);
    //     $this->db->delete('t_user');
    //     return $this->db->affected_rows();
    // }
    // 获取用户表中所有用户
    public function get_users(){
        $query = $this->db->get('t_user');
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