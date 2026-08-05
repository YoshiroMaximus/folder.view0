<?php
    require_once("/usr/local/emhttp/plugins/folder.view0/server/lib.php");
    $scripts = dirToArrayOfFiles(pathToMultiDimArray('/boot/config/plugins/folder.view0/scripts'), "/\..*{$type}.*\.js$/", "/.*\.disabled$/");
    foreach ($scripts as $script) {
        echo "<script src=\"";
        autov($script['path']);
        echo "\"></script>";
    }
?>