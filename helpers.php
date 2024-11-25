<?php 

function basePath($path = '') {
    return __DIR__ . '/' . $path;
}

function loadPartial($name) {
    $partialPath = basePath("views/partials/{$name}.php");

    if(file_exists($partialPath)) {
        require $partialPath;
    }else{
        echo "Partial '{$name} not found!'";
    }

}