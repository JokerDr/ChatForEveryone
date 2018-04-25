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
     //管理员登录
    public function get_admin_by_account($account){
        $query =  $this->db->select('*')->from('t_adm')
                ->group_start()
                        ->where('email =', $account)
                        ->or_where('phone =', $account)
                    ->group_end()
                    ->get();
        return $query->result();
    }
/// by ccy

    // 更新用户信息
    public function update_user_info($id, $user_info) {
        $this->db->where('user_id', $id);
        $this->db->update('t_user', $user_info);

        return $this->db->affected_rows();
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

    public function set_user_avatar($photo_id, $u_id){

        $sql = "SELECT * FROM t_photo WHERE u_id = ".$u_id." and using_or_not = 'using'";
        $query = $this->db->query($sql);
        if(count($query->result()) > 0){
            $photo_iid = $query->result()[0]->photo_id;

            $this->db->where('photo_id', $photo_iid);
            $this->db->update('t_photo', array(
                "using_or_not" => "not"
            ));
        }

        $this->db->where('photo_id', $photo_id);
        $this->db->update('t_photo', array(
            "using_or_not" => "using"
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
    // get用户头像
    public function get_user_avatar($u_id) {
        $sql = "SELECT * FROM t_photo WHERE u_id = ".$u_id." and using_or_not = 'using'";
        $query = $this->db->query($sql);
        return $query->result();
    }
    // get用户
    public function get_user($id){
        $sql = "SELECT * FROM t_user WHERE user_id = ".$id;
        $query = $this->db->query($sql);
        return $query->result();
    }
    // get朋有列表
    public function get_friend($id){
        $sql = "SELECT * FROM t_friends WHERE uid = ".$id;
        $query = $this->db->query($sql);
        $friends = array();
        foreach ($query->result() as $f){
            array_push($friends, $this->get_user($f->friends)[0]);
        }

        return $friends;
    }
    // 得到消息列表
    public function get_message($id){
        $sql = "SELECT * FROM t_message WHERE reciver_uid = ".$id;
        $query = $this->db->query($sql);
        return $query->result();
    }
    
    // 删除好友
    public function del_friend($id, $friend_id){
        $sql = "delete from t_friends where friends=".$friend_id." and uid=".$id;
        $query = $this->db->query($sql);
        return $this->db->affected_rows();
    }
    // get 用户自我介绍
    // public function get_user_content($u_id) {
    //     $sql = "SELECT * FROM t_intro WHERE u_id = ".$u_id;
    //     $query = $this->db->query($sql);
    //     return $query->result();
    // }
}