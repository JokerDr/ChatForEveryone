<?php

class User_model extends CI_Model
{
    // 添加用户
    public function add($user){
        $this->db->insert('t_user',$user);
        return $this->db->affected_rows();
    }
    //通过手机号或者邮箱来获取信息
    public function get_user_by_account($account){
       $query =  $this->db->select('*')->from('t_user')
             ->group_start()
                ->where('email =', $account)
                ->or_where('phone =', $account)
             ->group_end()
             ->get();
        return $query->result();
    }
//     public function user_list(){
//         $query = $this -> db -> get("t_user");
// //        $query = $this -> db -> get_where("t_user",array('name'=>'lisi'));

//         return $query->result();
//     }
    // public function del_user($id){
    //     $this->db->delete('t_user', array('id' => $id));
    //     return $this->db->affected_rows();
    // }
    
    // public function update($id,$name){
    //     $this->db->where('id', $id);
    //     $this->db->update('t_user', array(
    //         "name" => $name,
    //     ));
    //     return $this->db->affected_rows();
    // }

    
    // 跟新头像
    public function update_avatar() {
        
    }
    // 更新用户信息
    public function update_user_info() {

    }
    // 更新用户简介
    public function update_user_content($id, $content, $flag){
        if($flag){
            $this->db->where('u_id', $id);
            $this->db->update('t_intro', array(
                "intro_content" => $content,
            ));
        }else{
            $this->db->insert('t_intro', array(
                "u_id" => $id,
                "intro_content" => $content
            ));
        }
        return $this->db->affected_rows();
    }
    // 更新用户密码
    public function update_user_passwd($id, $passwd){
        $this->db->where('user_id', $id);
        $this->db->update('t_user', array(
            "password" => $passwd,
        ));
        return $this->db->affected_rows();
    }
    //插入图片
    public function insert_user_photo($id, $file_path){
        $this->db->insert('t_photo', array(
            "u_id" => $id,
            "photo" => $file_path
        ));

        return $this->db->affected_rows();
    }

    // get用户自我介绍
    public function get_user_content($id) {
        $sql = "SELECT * FROM t_intro WHERE u_id = ?";
        $query = $this->db->query($sql, array($id));
        return $query->result();
    }
    // get用户图片列表
    public function get_user_photo($id) {
        $sql = "SELECT * FROM t_photo WHERE u_id = ?";
        $query = $this->db->query($sql, array($id));
        return $query->result();
    }

}