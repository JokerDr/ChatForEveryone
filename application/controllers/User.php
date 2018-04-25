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
        return  $img; 
    }
    // 刷新验证码
    public function change_code(){
        $img = $this->captcha();
        echo $img;
    }
     //登录页
    public function login(){
        $img = $this->captcha();
        $this->load->view('login',array('img'=>$img));
         }
    //注册页
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
        $result = $this->User_model->get_user_by_account($account);//对数据库搜索 //用户表搜索
        $result_2 =$this->User_model->get_admin_by_account($account);//搜索管理员表
        $photo = $this->User_model->get_user_avatar($result[0]->user_id); //获取头像
        if(count($result_2) == 0){ //优先检索管理员表
            if(count($result) == 0){
            //若数据库搜索结果不存在
                 echo 'email or phone not exist';
            }else{//若数据库搜索结果存在
                 if($result[0]->password == $pwd){ 
                     if($photo){
                        $this->session->set_userdata(array(
                            'user' => $result[0],
                            'photo'=>$photo[0]
                            // 将搜索结果存在session里，方便使用
                        ));
                     }else{
                       $this->session->set_userdata(array(
                            'user' => $result[0]
                            // 将搜索结果存在session里，方便使用
                        ));  
                     }
                    
                    echo 'success';
                }else{
                    echo 'password error';
                }
            }
        }else{//存在admin账号
            if($result_2[0]->password == $pwd){ 
                $this->session->set_userdata(array(
               'user' => $result_2[0]
               // 将搜索结果存在session里，方便使用
               ));
               echo 'adminAccount';
           }else{
               echo 'password error';
           }
        }
         // }else{                     
        //     echo 'captcha error' ;                   
        // }  
    }
    // 登出
    public function logout(){
        $this->session->unset_userdata('user');
        redirect("welcome/index");
    }
    // 验证码校验
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
    //  邮箱校检
    public function validate_email($email){
        $pattern = "/^[a-z'0-9]+([._-][a-z'0-9]+)*@([a-z0-9]+([._-][a-z0-9]+))+$/";
        if(preg_match($pattern,$email)){  
           return true;  
        } else{  
            return false;  
        }  
    }   
    // check手机号格式
    public function checkMobile($str) {
            $re = '/^1\d{10}$/';
            return  strstr($str,$re) ? true : false;           
    } 
        
    //跳转到用户资料页
    public function info(){
        $id = $this->session->user->user_id;
        $photo_list = $this->get_user_photos();
        $avatar = $this->get_user_avatar();
        $self_content = $this->get_user_content();
        $user = $this->User_model->get_user($id);
        $friend_num = $this->get_friend_num();
        $msg_num = $this->get_msg_num();
        $friend_list = $this->User_model->get_friend($id);
        $friend_length = count($friend_list);
        $f_list = array();
        for($i = 0; $i < $friend_length; $i++){
            $friend_name = $friend_list[$i]->user_name;

            $result = $this->User_model->get_user_avatar($friend_list[$i]->user_id);
            if(count($result) == 1){
                $friend_avatar = $result[0]->photo;
            }else{
                $friend_avatar = "public/image/not_avatar.gif";
            }

            $friend_id = $friend_list[$i]->user_id;
            array_push($f_list, array(
                'friend_name' => $friend_name,
                'friend_avatar' => $friend_avatar,
                'friend_id' => $friend_id
            ));
        }
        // var_dump($f_list);
        // die();
        $this->load->view("userInfo", array(
            "photos" => $photo_list,
            "avatar" => $avatar,
            'self_content' => $self_content,
            'user' => $user[0],
            'friend_num' => $friend_num,
            'msg_num' => $msg_num,
            'friend_list' => $f_list
        ));
    }
    // 更新用户信息
    public function updateUserInfo(){
        // 提交到数据库
        // 重新设置session
        // 刷新页面
        $id = $this->session->user->user_id;
        $user_info = array(
            'user_name' => $this->input->get('nickname'),
            'height' => $this->input->get('height'),
            'diplomas' => $this->input->get('education'),
            'province' => $this->input->get('sheng'),
            'city' => $this->input->get('shi'),
            'others' => $this->input->get('qu'),
            'year' => $this->input->get('year'),
            'month' => $this->input->get('month'),
            'days' => $this->input->get('day'),
            'mood'=> $this->input->get('mood')
        );
        

        $result = $this->User_model->update_user_info($id, $user_info);
        // birthday: birthday,
        if($result > 0){
            echo 'success';
        }else{
            echo 'fail';
        }

    }
    // 设置头像
    public function uploadPhoto() {
        // 更新头像
        // 更新数据库
        // 刷新页面(前台跳转)

        //获取当前用户的id
        $id = $this->session->user->user_id;
        // $id = 2;
        // 获取photo数量
        $photo_result = $this->User_model->get_user_photo($id);
        $photo_list_length = count($photo_result);
        $photo_data = $_FILES['photo'];
        $file_type = substr(strrchr($photo_data['name'], '.'), 1);
        $file_path = 'photo/photo_'.$id.'_'.$photo_list_length.'.'.$file_type;//图片文件的引用路径

        copy($photo_data['tmp_name'], $file_path);
        $upload_result = $this->User_model->insert_user_photo($id, $file_path);
        if($upload_result > 0){
            echo "success";
        }else{
            echo 'fail';
        }
    }
    public function set_avatar() {
        $photo_id = $this->input->get("photo_id");
        $u_id = $this->input->get("u_id");
        $result = $this->User_model->set_user_avatar((int)$photo_id, (int)$u_id);
        if($result > 0){
            echo 'success';
        }else{
            echo 'fail';
        }
    }
    // 更新用户自我介绍
    public function updateContent(){
        $content = $this->input->get("content");
        $id = $this->session->user->user_id;
        $flag = $this->check_user_content();
        // var_dump($flag);
        // die();
        if($flag){
            $result = $this->User_model->update_user_content($id, $content, $flag);
        }else{
            $result = $this->User_model->update_user_content($id, $content, $flag);
        }
        if($result > 0){
            echo 'success';
        }else{
            var_dump($result);
            die();
        }
    }
    //  检查是否存在 自我介绍
    public function check_user_content() {
        $id = $this->session->user->user_id;
        $result = $this->User_model->get_user_content($id);
        $result_length = count($result);
        if($result_length > 0){
            return true;
        }else{
            return false;
        }
    }
    // 检查旧密码是否正确
    public function chackPasswd(){
        // 更新密码
        $passwd_old_input = $this->input->get('passwdOld');
        $passwd_old = $this->session->userdata("password");

        if($passwd_old_input == $passwd_old){
            echo 'yes';
        }else{
            echo 'not';
        }
        
    }
    public function updatePasswd() {
        // 更新密码
        // 更新数据库
        // 跳转到登陆页


        // 重新设置session
        // 后台刷新页面
        $passwd = $this->input->get("passwd");
        $id = $this->session->user->user_id;
        $result = $this->User_model->update_user_passwd($id, $passwd);
        if($result > 0){
            // 成功就跳转到登陆页
            // redirect("user/login");
            echo 'success';
        }else{
            // var_dump($result);
            // die();
            echo 'error';
        }
    }
    public function get_user_photos() {
        $id = $this->session->user->user_id;
        $result = $this->User_model->get_user_photo($id);
        return $result;
    }
    public function get_user_avatar() {
        $id = $this->session->user->user_id;
        $result = $this->User_model->get_user_avatar($id);
        if(count($result) == 1){
            return $result[0]->photo;
        }else{
            return '';
        }
    }
    public function get_user_content() {
        // self_content

        $id = $this->session->user->user_id;
        $result = $this->User_model->get_user_content($id);
        if(count($result) == 1){
            return $result[0]->intro_content;   
        }else{
            return '';
        }
    }
    public function get_friend_num(){
        $id = $this->session->user->user_id;
        $result = $this->User_model->get_friend($id);
        $friend_num = count($result);
        return $friend_num;
    }
    public function get_msg_num() {
        $id = $this->session->user->user_id;
        $result = $this->User_model->get_message($id);
        $msg_num = count($result);
        return $msg_num;
    }

    public function delete_friend(){
        $id = $this->session->user->user_id;
        $friend_id = $this->input->get('friend_id');
        // var_dump($friend_id);
        // die();
        $result = $this->User_model->del_friend($id, $friend_id);
        if($result > 0){
            echo 'success';
        }else{
            echo 'fail';
        }
    }

}
?>    
