<?php

    class Welcome_model extends CI_Model{
        public function get_img_url(){
           $sql = 'SELECT * FROM photo WHERE photo_id IN (
	            select photo_id from scores where score<60
            )';
        }
    }   

?>