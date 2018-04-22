<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    
    class Welcome extends CI_Controller {   
        public function __construct(){
             parent::__construct();
            // session_start();//开启session
            $this->load->helper('cookie');
            $this->load->model("Welcome_model");
        }   
        // 自动跳转到主页（默认未登录状态下）
         public function index(){       
            $results = $this->Welcome_model->get_infor_photo();
            $users_width_photos = json_encode($results); 
            $this->load->view('index',array('users_width_photos'=>$users_width_photos));
            // $this->load->view('index');
        } 
        // 登录跳转到首页
        public function index_logined(){
            $this->load->library('pagination');
            $uname = $this->session->userdata('user_name');
            $config['base_url'] = base_url().'welcome/index_logined';//当前控制器方法
             $results = $this->Welcome_model->get_infor_photo();
            $users_width_photos = json_encode($results); 
            $this->load->view('index',array('users_width_photos'=>$users_width_photos));
        }
        // 加载消息页
        public function message(){
            $user = $this->session->userdata('user');
            $results = $this->Welcome_model->get_message($user->user_id);
             $this->load->library('pagination');
            $config['base_url'] = base_url().'welcome/message';
            $config['total_rows'] = count($results);
            $config['per_page'] = 6;
            $this->pagination->initialize($config);
            $links = $this->pagination->create_links();
            $this->load->view('message',array('results'=>$results,'links'=>$links));
        }
        //搜索页    
        public function searched(){
            // 加载搜索页
           $this->load->view('search');
        }
        // 搜索结果
        public function search_res(){
           $user_name  = $this->input->get('user_name');
           $user_name_new = '"'.$user_name.'"';
           $this->load->library('pagination'); 
           $res = $this->Welcome_model->name_search($user_name_new);//搜索的结果
        //    var_dump($res);
           $config['base_url'] = base_url().'welcome/searched';
           $config['total_rows'] = count($res);//结果总数
           $config['per_page'] = 4;//每页显示条数
           $this->pagination->initialize($config);
           $links = $this->pagination->create_links();       
           echo json_encode(array('links'=>$links,'res'=>$res));
        }
        //访问别人自资料卡页
        public function about_one(){
            $uid = $this->input->get('uid');
            $friends = $this->input->get('another');
            // print($friends);
            $row_1 = $this->Welcome_model->visit_someone($uid,$friends);
            $row_2 = $this->Welcome_model->power_visit_me($friends);
            // var_dump($row_2);
            // var_dump($row_1);
            $result = $this->Welcome_model->get_user_by_uid($friends);
             var_dump($result) ;
            $res = json_encode($result);
            if($row_2->power_value == '1'){//允许所有人访问
                echo 'all_visit';
                $this->load->view('aboutOne',array('res'=>$res));
            }else{//只允许朋友访问
                //查看朋友表是否包含访问者
                if(count($row_1)>0){//包含
                    echo 'friend_visit';
                    $this->load->view('aboutOne',array('res'=>$res));
                }else{//不包含
                    echo 'not_allow';
                }
            }   
        }      
        // 取出十二个人的资料，包括相片
        public function find12(){
            $results = $this->Welcome_model->get_infor_photo();//向后台查找用户的个人信息以及个人照片，以json格式返回
            // $res=[];
            // for($i = 0;$i<12;$i++){
            //     $arr = ['
            //     uname'=>$results[i]->user_name,
            //     'sex'=>$results[i]->sex,
            //     'province'=>$results[i]->province,
            //     'city'=>$results[i]->city,
            //     'others'=>$results[i]->height,
            //     'diplomas'=>$results[i]->diplomas,
            //     // 'photoCounts'=>,//几张照片
            //     // 'photoHead'=>,//头像图片的地址
            //     // 'intro_self'=>//自我介绍
            //     ];
            //     $res[i] = $arr;
            // }
             echo json_encode($res);
        }
        // 获得与指定用户的对话信息
        public function get_message(){
            $uid = $this->input->get('uid');
            $other = $this->input->get('other');
            $time = $this->input->get('time');
            // var_dump($other) ;
            $messages = $this->Welcome_model-> chat_with($uid, $other,$time);
            // // var_dump ($messages) ;
            echo  json_encode($messages);
        }
        // 删除某条消息
        public function del_one_message(){
            $uid = $this->input->get('uid');
            $other = $this->input->get('other');
            $time = $this->input->get('time');
            $res = $this->Welcome_model->del_message($other,$uid,$time);
            if($res>0){
                echo 'success';
            }else{
                echo 'false';
            }
            // redirect('welcome/message');
        }
        // 删除所有消息
        public function del_all_message(){
            $uid = $this->input->get('uid');
            $res = $this->Welcome_model->del_messages($uid);
            if($res>0){
                echo 'success';
            }else{
                echo 'false';
            }
            // redirect('welcome/message');
        }
         //发送/回复消息
         public function acceptInfo(){
            $sender = $this->input->post('uid');
            $accepter = $this->input->post('other');
            $content = $this->input->post('content');
            $create_time_YMD = $this->input->post('create_time_YMD');
            $create_time_HS = $this->input->post('create_time_HS');
            $rows = $this->Welcome_model->add_message(array(
                'reciver_uid'=>$accepter,
                'sender_uid'=>$sender,
                'content'=>$content,
                'create_time_YMD'=>$create_time_YMD,
                'create_time_HS'=>$create_time_HS
            ));
            if($rows>0){
                echo 'success';
            }else{
                echo 'failed';
            }            
        }
        // 昵称搜索
        // public function name_search(){
        //     $name = $this->input->get('user_name');
        //     $results = $this->Welcome_model->
        // }
        // 条件搜索
        public function condition(){

        }
        //  添加好友
        public function addfriend(){
            $asker = $this->input->post('user_id');//询问者
            $accept  = $this->input->post('accepter_id');//接受者
            $results = $this->Welcome_model->add_friends($asker,$accept);//
            $results = $this->Welcome_model->add_friends($accept,$asker);
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