<?php
function createPokemon(&$Number, &$Name, &$Region, &$Type, &$Height, &$Weight, &$Evolution, &$Picture)
{
}

function showPokemon()
{
}

function addPokemon()
{
}

function dropPokemon()
{
}

function modifyPokemon()
{
}

function searchPokemonNumber(&$Number)
{
    $findPokemon = array_search($Number);
}

function showPokedex(&$pokedex)
{
    foreach ($pokedex as $value) {
        foreach ($value as $key => $value2) {
            echo "The value is " . "'" . $key . "'" . " and his information is " . "'" . $value2 . "'" . "<br>";
        }
    }
}
