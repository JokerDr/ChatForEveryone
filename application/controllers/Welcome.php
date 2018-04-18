<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    
    class Welcome extends CI_Controller {
    
          public function __construct(){
                parent::__construct();
            // session_start();//开启session
                $this->load->helper('cookie');
                $this->load->model("Welcome_model");
            }   
           
        public function searched(){
             // 加载搜索页
            // $this->load->library('pagination');
            // $config['base_url'] = base_url().'welcome/searched';
            // $total = $this->Welcome_model->get_messages();
            // $config['total_rows'] = $total;//总数
            // $config['per_page'] = 5;//每页显示条数
            // $this->pagination->initialize($config);
            // $links = $this->pagination->create_links();
            $this->load->view('search');
        }
        public function index_logined(){
            $this->load->library('pagination');
            $uname = $this->session->userdata('user_name');
            $config['base_url'] = base_url().'welcome/index_logined';//当前控制器方法
            $this->load->view('index',array('uname'=> $uname));
        }
        // 加载对话消息页
        public function message(){
             $this->load->library('pagination');
            $config['base_url'] = base_url().'welcome/message';
            $config['total_rows'] = 200;
            $config['per_page'] = 20;
            $this->pagination->initialize($config);
            echo $this->pagination->create_links();
            $this->load->view('message');
        }
     public function index(){
        // 自动跳转到主页（未登录状态下）
        $this->load->view('index');
    }       
    // 取出十二个人的资料，包括相片
    // public function find12(){
    //     $results = $this->Welcome_model->get_infor_photo();//向后台查找用户的个人信息以及个人照片，以json格式返回
    //     $res=[];
    //     for($i = 0;$i<12;$i++){
    //         $arr = ['
    //         uname'=>$results[i]->user_name,
    //         'sex'=>$results[i]->sex,
    //         'province'=>$results[i]->province,
    //         'city'=>$results[i]->city,
    //         'others'=>$results[i]->height,
    //         'diplomas'=>$results[i]->diplomas,
    //         'photoCounts'=>,//几张照片
    //         'photoHead'=>,//头像图片的地址
    //         'intro_self'=>//自我介绍
    //         ];
    //         $res[i] = $arr;
    //     }
    //      echo json_encode($res);
    // }
    // 消息盒子 分页功能
    public function fenye(){
            
            $this->load->library('pagination');
            $config['base_url'] = base_url().'welcome/message';
            $config['total_rows'] = 200;
            $config['per_page'] = 20;
            $this->pagination->initialize($config);
            echo $this->pagination->create_links();
    }
        //  添加好友
     public function addfriend(){
        $asker = $this->input->get(user_id);//询问者
        $accept  = $this->input->get(asker_id);//接受者
        $results = $this->Welcome_model->add_friends($asker,$accept);//
        if(count($results)>0){
            echo 'success'; //插入数据成功
        }else{
            echo 'false';
        }
    }  
     //是否有该好友
    public function have_or_not (){
        $row = $this->Welcome_model->find_one();
        if($row>0){
            echo 'exist';
        }else{
            echo 'not exist';
        }
    }     
 
}
 
    
?>