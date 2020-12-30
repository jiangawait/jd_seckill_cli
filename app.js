#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const { jd_buy, jd_yuyue } = require("./jd_seckill");
const config = require("./config");

inquirer
    .prompt([
        {
            type: "input",
            name: "id_buy.itemUrl",
            message: "需要抢购的商品URL，默认是茅台 - ",
            default: "https://item.jd.com/100012043978.html",
        },
        {
            type: "password",
            name: "id_buy.password",
            message: "生成订单需要的密码, 不写密码，最后一步无法生成订单 ",
        },
        {
            type: "rawlist",
            name: "action",
            message: "选择需要执行的操作",
            choices: [
                {
                    index: 0,
                    value: "预约",
                },
                {
                    index: 1,
                    value: "抢购",
                },
            ],
            default: 0,
        },
    ])
    .then((answers) => {
        if (answers.id_buy.itemUrl) {
            config.item_url = answers.id_buy.itemUrl;
        }

        if (answers.id_buy.password) {
            config.password = answers.id_buy.password;
        } else {
            console.log(chalk.red("请填写生成订单需要的密码"));
            return;
        }
        switch (answers.action) {
            case "预约":
                jd_yuyue(config);
                break;
            case "抢购":
                jd_buy(config);
                break;

            default:
                break;
        }
    })
    .catch((error) => {
        console.log(chalk.red(error));
    });
