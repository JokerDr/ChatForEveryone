<?php
    class Welcome_model extends CI_Model{
        
        // 添加其他管理员
        public function add_admin($infor){
            $sql = $this->db->insert('admin',$infor);
            return $sql->row();
        }
    }
?>