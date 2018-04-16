<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class User extends CI_Controller{
    public function __construct(){
        parent::__construct();
    // session_start();//开启session
        $this->load->helper('cookie');
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
        
        $this->load->view('register',array('img'=>$img));
    }  
    //登录校检     
    public function check_login(){
        $pwd = $this->input->post('pwd');
        $account = $this->input->post('account');//接收ajax数据    
        $autoload = $this->input->post('autoload');
        // $captcha = $this->input->post('captcha');
        // $sql = "INSERT INTO table (title) VALUES(".$this->db->escape($title).")";
        //  $this->input->set_cookie("username",$user_info['username'],259200);//三天
        //  $this->input->set_cookie("password",$user_info['password'],259200);
        // $this->input->set_cookie("user_id",$user_info['user_id'],259200);
                    //echo $this->input->cookie("password");//适用于控制器
                    //echo $this->input->cookie("username");//适用于控制器
                    //echo $_COOKIE['username'];//在模型类中可以通过这种方式获取cookie值
                    //echo $_COOKIE['password'];//在模型类中可以通过这种方式获取cookie值
        // $time = date('Y-m-d H:i:s',time());//获取服务器时间   
        // $data = $this->session->userdata('captcha');//获取name为captcha的session的值  
        // $data_1 = $this->session->userdata('time');//获取存在session里的时间
            // if($data == $captcha){                 
                        $result = $this->User_model->get_user_by_account($account);//对数据库搜索
                        if(count($result) == 0){
                        //若数据库搜索结果不存在
                             echo 'email or phone not exist';
                        }else{//若数据库搜索结果存在
                            if($result[0]->password == $pwd){ 
                                $this->session->set_userdata(array(
                                    'user' => $result[0]
                            // 将搜索结果存在session里，方便使用
                                ));
                                echo 'success';
                             }else{
                                echo 'password error';
                             }
                         }
                    // }else{
                        
                    //     echo 'captcha error' ;                   
                    // }  
    }
    //记住密码
//    public function remember_pwd(){
        
//     }
    public function checkCaptcha(){
         $captcha = $this->input->get('captchaVal');
         $data = $this->session->userdata('captcha');//获取name为captcha的session的值  
         if($data == $captcha){
             echo 'right';
         }else{
             echo 'error';
         }
    }
    //搜寻账号
   public function searchAccount(){
        $account = $this->input->get('account');
        $result = $this->User_model->get_user_by_account($account);//对数据库搜索
        if(count($result) == 0){
            //若数据库搜索结果不存在
            echo 'account not exist';
        }else{//若数据库搜索结果存在
            echo 'account already exist';
        }

   }  
   //注册跳转
     public function add_user(){
         $account = $this->input->post('account');
         $uname = $this->input->post('uname');
         $pwd = $this->input->post('pwd');
         $sex = $this->input->post('sex');
         $year = $this->input->post('year');
         $month = $this->input->post('month');
         $days = $this->input->post('days');
         $province = $this->input->post('province');
         $city = $this->input->post('city');
         $others = $this->input->post('others');
         $height = $this->input->post('height');
         $diplomas = $this->input->post('diplomas');     
         $result = $this->User_model->get_user_by_account($account);//对数据库搜索
        if(count($result) == 0){  
            if($this->validate_email($account)==true){
                $email =  $account;
                $phone = $this->input->post('phone');
                $rows = $this->User_model->add(array(
                    'email'=>$email,
                    'phone'=>$phone,
                    'user_name'=>$uname,
                    'password'=>$pwd,
                    'sex'=>$sex,
                    'year'=> $year,
                    'month'=>$month,
                    'days'=>$days,
                    'province'=>$province,
                    'city'=>$city,
                    'others'=>$others,
                    'height'=>$height,
                    'diplomas'=>$diplomas
                ));              
            }else{
                $phone =  $account;
                $rows = $this->User_model->add(array(
                    'phone'=>$phone,
                    'user_name'=>$uname,
                    'password'=>$pwd,
                    'sex'=>$sex,
                    'year'=> $year,
                    'month'=>$month,
                    'days'=>$days,
                    'province'=>$province,
                    'city'=>$city,
                    'others'=>$others,
                    'height'=>$height,
                    'diplomas'=>$diplomas
                ));                
            } 
         
             if($rows > 0){
                $result = $this->User_model->get_user_by_account($account);
                $this->session->set_userdata(array(
                    'user'=>$result[0]
                ));
                echo true;
            }else{

            } 
             $this->output->set_header("Access-Control-Allow-Origin: * ");
        }
      
    }

   public function auto_login(){
        $account = $this->input->post('account');//接收ajax数据    
        $result = $this->User_model->get_user_by_account($account);
        $this->session->set_userdata(array(
            'user'=>$result[0]
        ));
        redirect("/welcome/index");
    }
    
        //  邮箱校检p
   function validate_email($email){
        $pattern = "/^[a-z'0-9]+([._-][a-z'0-9]+)*@([a-z0-9]+([._-][a-z0-9]+))+$/";
        if(preg_match($pattern,$email)){  
           return true;  
        } else{  
            return false;  
        }  
    }
        //check手机号格式
    // public function checkMobile($str) {
    //         $re = '/^1\d{10}$/';
    //         return  strstr($str,$re) ? true : false;           
    //     } 
    
    

}
?>

