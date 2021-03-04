<?php

/**
 *
 * make Rights Array
 *
 * @param $array
 *
 * return array
 */
function makeRightsArray($arr) {
    $rights = rights();

    foreach ($rights as $key => $right) {
        if (is_numeric($right)) {
            if (in_array($key, $arr)) {
                $rights[$key] = 1;
            } else {
                $rights[$key] = 0;
            }
        } else {
            foreach ($right as $key2 => $sub_right) {
                if (in_array($key2, $arr)) {
                    $rights[$key][$key2] = 1;
                } else {
                    $rights[$key][$key2] = 0;
                }
            }
        }
    }

    return $rights;
}

/**
 *
 * check Rights
 *
 * @param $right
 *
 * @return boolean
 */
function haveRight($right)
{
    $right_array = explode(".", $right);
    $rights = collect(json_decode(Auth::user()->rights));
    $right_length = count($right_array);

    switch ($right_length) {
        case '1':
            return $rights[$right_array[0]];
            break;

        case '2':
            $parent_right = collect($rights[$right_array[0]]);
            return $parent_right[$right_array[1]];
            break;

    }
}

/**
 *
 * make array for treeview
 *
 * @param $rights
 *
 * return array
 *
 */
function treeView($rights, $readonly = FALSE)
{
    $rights = json_decode($rights);
    $rights = collect($rights);
    $treeview = [];
    $values = [];
    $i = 0;

    foreach ($rights as $key => $right) {
        if (!is_numeric($right)) {
            $children = collect($right);
            $treeview[$i] = [];
            $treeview[$i]['id'] = $key;
            $treeview[$i]['name'] = ucwords(str_replace("_", " ", $key));
            if ($readonly) {
                $treeview[$i]['locked'] = TRUE;
            }
            if (count($children) > 0) {
                $treeview[$i]['children'] = [];
                $j = 0;
                foreach ($children as $key2 => $sub_right) {
                    $treeview[$i]['children'][$j] = [];
                    $treeview[$i]['children'][$j]['id'] = $key2;
                    $treeview[$i]['children'][$j]['name'] = ucwords(str_replace("_", " ", $key2));
                    if ($readonly) {
                        $treeview[$i]['children'][$j]['locked'] = TRUE;
                    }
                    if ($sub_right) {
                        array_push($values, $key2);
                    }
                    $j++;
                }
            }

        } else {
            if ($right) {
                array_push($values, $key);
            }
            $treeview[$i] = [];
            $treeview[$i]['id'] = $key;
            $treeview[$i]['name'] = ucwords(str_replace("_", " ", $key));
            if ($readonly) {
                $treeview[$i]['locked'] = TRUE;
            }
        }
        $i++;
    }

    return ['treeview' => $treeview, 'values' => $values];
}

/**
 *
 * Have Permissions
 *
 * @return array
 *
 */
function havePermissions()
{
    $rights = (array)json_decode(Auth::user()->rights);
    $rights = collect($rights);
    foreach ($rights as $key => $value) {
        if (!is_numeric($value)) {
            $rights[$key] = collect($value);
        }
    }

    return $rights;
}

/**
 *
 * Rigths
 *
 * @return rights
 *
 */
function rights()
{
    return [
        'dashboard' => 1,
        'shop_setting' => [
            'add_setting' => 1,
            'edit_setting' => 1,
            'settings' => 1
        ],
        'users' => [
            'user_list' => 1,
            'view_user' => 1,
            'add_user' => 1,
            'edit_user' => 1,
            'delete_user' => 1
        ]
    ];
}
