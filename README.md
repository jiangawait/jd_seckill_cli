# 基于 puppteer 京东茅台抢购

## 介绍

> 使用 puppteer 自动化预约，抢购茅台


## 注意问题

>
>  **问题1：京东Cookie的有效期**
>
> >就我自己项目中的使用情况而言，一个月有效期。

>
>  **问题2：京东Cookie填写方式**
>
> > config.js文件中的cookie字段填写拷贝过来的cookie

>
>  **问题2：配置密码**
>
> > 不配置密码会下单失败（config文件中设置password）




## 使用用法

* ` git clone ` 项目；
* 安装 `nodejs`；
* 命令行运行：` npm install `；
* 命令行运行：` npm link ` 或者 `sudo npm link`；
* 成功之后可 命令行运行： `jd_seckill_cli`；

## 获取京东cookie

* 使用项目中的Chrome插件：`JDCookie`；
* Chrome中拓展程序开启`开发者模式`；
* 点击`加载已解压的拓展程序`，选择`JDCookie`目录；
* 登录[京东](https://jd.com/)；
* 点击`JDCookie`即可拷贝京东cookie；

