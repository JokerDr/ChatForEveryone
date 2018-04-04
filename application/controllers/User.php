<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class User extends CI_Controller{
    public function __construct(){
        parent::__construct();
    // session_start();//开启session
        $this->load->model("User_model");
    }  
    //验证码生成
     public function captcha(){
        $this->load->helper('captcha');
        $rand = rand(1000,9999);
        $this->session->set_userdata(array(
            "captcha" => $rand
        ));
        $vals = array(
            'word'      => $rand,
            'img_path'  => './public/image/captcha/',
            'img_url'   => base_url().'public/image/captcha/',
            'font_path' => './path/to/fonts/texb.ttf',
            'img_width' => 120,
            'img_height'    => 46,
            'expiration'    => 60,//单位s
            'word_length'   => 8,
            'font_size' => 16,
            'img_id' => 'captcha',
            // White background and border, black text and red grid
            'colors'    => array(
                'background' => array(255, 255, 255),
                'border' => array(255, 255, 255),
                'text' => array(0, 0, 0),
                'grid' => array(255, 40, 40)
            )
        );
        $cap = create_captcha($vals);
        $img = $cap['image'];
        // echo $img;
        return  $img;
     
    }
    // 刷新验证码
    public function change_code(){
        $img = $this->captcha();
        echo $img;
    }
     //加载登录页
    public function login(){
        $img = $this->captcha();
        $this->load->view('login',array('img'=>$img));
         }
    //加载注册页
    public function register(){
        $img = $this->captcha();
        $this->load->view('reg',array('img'=>$img));
         }  
    //登录校检     
    public function check_login(){
        $pwd = $this->input->get('pwd');
        $email = $this->input->get('email');
        $result = $this->User_model->get_user_by_email($email);
        if(count($result) == 0){
            echo 'email not exist';
        }else{
            if($result[0]->password == $pwd){
                $this->session->set_userdata(array(
                    'user'=>$result[0]
                ));
                echo 'success';
            }else{
                echo 'password error';
            }
        }
    }     
    public function getimgsession(){
         $data = $this->session->userdata('captcha');
         return $data;
        //  $this->load->view('test')
    } 
   
}
?>

<!-- /* End of file Controllername.php */ -->
