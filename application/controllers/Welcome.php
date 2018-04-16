<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    
    class Welcome extends CI_Controller {
    
          public function __construct(){
                parent::__construct();
            // session_start();//开启session
                $this->load->helper('cookie');
                $this->load->model("Welcome_model");
            }  
      
    //    登录状态下
        public function searched_login(){
            $this->load->view('search');
        }
        // 未登录状态下
        public function searched(){
            $this->load->view('search');
        }

         // 在登录页登录后跳转到-》我的资料卡
        public function index_logined(){
        $this->load->library('pagination');
        // $user = $this->session->userdata('user');
        $uname = $this->session->userdata('user_name');
        // $total = $this->Article_model->get_logined_count_article($user->user_id);
        $config['base_url'] = base_url().'welcome/index_logined';//当前控制器方法
        // $config['total_rows'] = $total;//总数
        // $config['per_page'] = 1;//每页显示条数
        // $this->pagination->initialize($config);
        // $links = $this->pagination->create_links();
        // $results = $this->Article_model->get_logined_article_list($this->uri->segment(3),$config['per_page'],$user->user_id);
        // $types = $this->Article_model->get_logined_article_type($user->user_id);
        $this->load->view('index',array('uname'=> $uname));//'list'=>$results,'types'=>$types,'links'=>$links
    }

//     // 自动跳转到主页（未登录状态下）
     public function index()
    {
        $this->load->library('pagination');
        // $total = $this->Article_model->get_count_article();
        $config['base_url'] = base_url().'welcome/index';//当前控制器方法
        // $config['total_rows'] = $total;//总数
        // $config['per_page'] = 1;//每页显示条数
//
//		$config['first_link'] = 'one';
//
//		$config['next_link'] = '**';
        // $this->pagination->initialize($config);
        // $links = $this->pagination->create_links();
        // $results = $this->Article_model->get_article_list($this->uri->segment(3),$config['per_page']);
        // $types = $this->Article_model->get_article_type();
        $this->load->view('index');
    }
    // 取出十二个人的资料，包括相片
    public function find12(){
        $results = $this->Welcome_model->get_infor_photo();//向后台查找用户的个人信息以及个人照片，以json格式返回
        return $results;
    }
} 
    
?>