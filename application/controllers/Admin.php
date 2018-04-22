<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Admin extends CI_Controller{
    public function __construct(){
        parent::__construct();
    // session_start();//开启session
        $this->load->helper('cookie');
    // $this->load->model("User_model");
    } 
    //加载管理员页面
    public function admin(){
        $this->load->library('pagination');
        $config['base_url'] = 'http://example.com/index.php/test/page/';
        $config['total_rows'] = 200;
        $config['per_page'] = 20;
        $this->pagination->initialize($config);
        $links = $this->pagination->create_links();
        $this->load->view('admin',array('links'=>$links));
    }
    // 先昵称搜索用户
    public function name_search($user_name){
        
        $user_name = $this->input->get('uname');
        return $this->Admin_model->name_search($user_name); 
    }
    
    // 管理员单独建立一个消息表！！！
    
}
?>