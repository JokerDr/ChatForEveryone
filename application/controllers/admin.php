<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Admin extends CI_Controller{
    public function __construct(){
        parent::__construct();
    // session_start();//开启session
        $this->load->helper('cookie');
    $this->load->model("Admin_model");
    $this->load->model("Welcome_model");
    } 
    //加载管理员页面
    public function admin(){
        // $users = $this->Admin_model->get_users();
        $this->load->view('admin');
    }
    //获得所有用户
    public function get_uers(){
        $results = $this->Admin_model->get_users();
        echo json_encode($results);
    }
    // 群体发送公告
    public function notice(){
        $sender = $this->input->post('uid');
        $content = $this->input->post('content');
        $create_time_YMD = $this->input->post('create_time_YMD');
        $create_time_HS = $this->input->post('create_time_HS');
        $res = $this->Admin_model->get_users();
        // var_dump($sender);
        // var_dump($content);
        // var_dump($create_time_YMD);
        // var_dump($create_time_HS);
        // var_dump($res);
        foreach($res as $row){
            $rows = $this->Welcome_model->add_message(array(
                            'reciver_uid'=>$row->user_id,
                            'sender_uid'=>$sender,
                            'content'=>$content,
                            'create_time_YMD'=>$create_time_YMD,
                            'create_time_HS'=>$create_time_HS
                        ));
        }    
        // if($rows>0){
        //         echo 'success';
        // }else{
        //         echo 'failed';
        // }  
    }
    // 先昵称搜索用户
    public function name_search($user_name){
        $user_name = $this->input->get('uname');
        return $this->Admin_model->name_search($user_name); 
    }
    // 删除用户
    public function del_user(){
        $user_id = $this->input->get('user_Id');
        $result = $this->Admin_model->delete_user($user_id);
        // echo json_encode($result);
        if($result>0){
            echo "delete success";
        }
        var_dump( $result);

        
    }
    // 删除用户的自我介绍
    public function del_intro(){
        $uid = $this->input->get('uid');
        $row = $this->Admin_model->del_intro_uid($uid);
        if($row>0){
            echo 'delete success';
        }else{
            echo "nothing to delete";
        }
    }
    // 获得用户的所有图片
    public function get_all_pic(){
         $uid = $this->input->get('uid');
         $results = $this->Admin_model->get_pic_by_uid($uid);
         echo json_encode($results);
    }
    // 删除用户选定的图片
    public function del_one_pic(){
        $photo_id = $this->input->get('photo_id');
        $uid = $this->input->get('uid');
        $results = $this->Admin_model->del_pic($uid, $photo_id);
        if($results>0){
            echo 'delete success';
        }else{
            echo "nothing to be deleted";
        }
    }
    
}
?>