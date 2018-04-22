<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class User extends CI_Controller{
    public function __construct(){
        parent::__construct();
    // session_start();//开启session
        $this->load->helper('cookie');
    // $this->load->model("User_model");
    } 
    // 删除用户
    public function delete_user(){
    }
    // 删除管理员 
    public function del_admin(){
        
    }
    
   
    // 给每个用户发通知
    public function notice(){

    }
    // 管理员单独建立一个消息表！！！
    

?>