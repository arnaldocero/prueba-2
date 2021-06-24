<?php
include_once 'config.inc.php';

   
            
			$nombre= $_POST['names'];
			$tel= $_POST['phone'];
            $email= $_POST['email'];
            $db=new Conect_MySql();
            $sql = "INSERT INTO contacto(nombres_completo, celuar, correo) 
			VALUES('$nombre','$tel','$email')";
            $query = $db->execute($sql);
            if($query){
				echo '<script>alert("Se guardo correctamente")</script>';
                header('Location: ../Index.html');
            }
        
    

?>
