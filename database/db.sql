DROP DATABASE IF EXISTS `xidiannms`;
CREATE DATABASE `xidiannms`;
USE `xidiannms`;

/*
账户信息表
*/
DROP TABLE IF EXISTS account;
CREATE TABLE `account` (
  `account_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `account` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '账户名称' UNIQUE ,
  `password` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '密码',
  `email` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '邮箱',
  `authority` INT(11) NOT NULL DEFAULT 0 COMMENT '权限值',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='账户信息表';

INSERT INTO `account` VALUES (1, 'admin', 'admin', '742289218@qq.com', 2, now(), now());
INSERT INTO `account` VALUES (2, 'account', 'password', '535289218@qq.com', 2, now(), now());
INSERT INTO `account` VALUES (3, 'admin1', 'admin1', '893289434@qq.com', 1, now(), now());
INSERT INTO `account` VALUES (4, 'admin2', 'admin2', '435363666@qq.com', 2, now(), now());
INSERT INTO `account` VALUES (5, 'admin3', 'admin3', '328958920@qq.com', 2, now(), now());

/*
告警级别表
*/
DROP TABLE IF EXISTS `warning_level`;
CREATE TABLE `warning_level` (
  `warning_level_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `warning_level` INT(11) NOT NULL DEFAULT 0 COMMENT '告警级别' UNIQUE ,
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '告警级别描述',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`warning_level_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='告警级别表';

INSERT INTO `warning_level` VALUES (1, 1, '严重', NOW(), NOW());
INSERT INTO `warning_level` VALUES (2, 2, '警告', NOW(), NOW());
INSERT INTO `warning_level` VALUES (3, 3, '通知', NOW(), NOW());

/*
告警类型表
*/
DROP TABLE IF EXISTS `warning_type`;
CREATE TABLE `warning_type` (
  `warning_type_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `warning_type` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '告警类型' UNIQUE ,
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '告警类型描述',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`warning_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='告警类型表';

INSERT INTO `warning_type` VALUES (1, 'linkInterrupt', '线路中断',  NOW(), NOW());
INSERT INTO `warning_type` VALUES (2, 'NetPoller', '设备ping不通', NOW(), NOW());

/*
产生方式表
*/
DROP TABLE IF EXISTS `create_way`;
CREATE TABLE `create_way` (
  `create_way_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `create_way` INT(11) NOT NULL DEFAULT 0 COMMENT '产生方式' UNIQUE ,
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '产生方式描述',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`create_way_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='产生方式表';

INSERT INTO `create_way` VALUES (1, 1, '自身发生', NOW(), NOW());

/*
设备类型表
*/
DROP TABLE IF EXISTS `machine_type`;
CREATE TABLE `machine_type` (
  `machine_type_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `machine_type` INT(11) NOT NULL DEFAULT 0 COMMENT '设备类型' UNIQUE ,
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '设备类型描述',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`machine_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='设备类型表';

INSERT INTO machine_type VALUES (1, 1, '路由器', NOW(), NOW());

/*
链路类型表
*/
DROP TABLE IF EXISTS `link_type`;
CREATE TABLE `link_type` (
  `link_type_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `link_type` INT(11) NOT NULL DEFAULT 0 COMMENT '链路类型' UNIQUE ,
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '链路类型描述',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`link_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='链路类型表';

/*
链路状态表
*/
DROP TABLE IF EXISTS `link_status`;
CREATE TABLE `link_status` (
  `link_status_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `link_status` INT(11) NOT NULL DEFAULT 0 COMMENT '链路状态' UNIQUE ,
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '链路状态描述',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`link_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='链路状态表';

INSERT INTO link_status VALUES (1, 1, '告警', NOW(), NOW());
INSERT INTO link_status VALUES (2, 2, '正常', NOW(), NOW());

/*
设备信息表
*/
DROP TABLE IF EXISTS `machine`;
CREATE TABLE `machine` (
  `machine_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `machine_type` INT(11) NOT NULL DEFAULT 0 COMMENT '设备类型',
  `name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '设备名称',
  `ip_address` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'IP地址',
  `SNMP_address` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SNMP地址',
  `memory_used_ratio` DOUBLE NOT NULL DEFAULT 0 COMMENT '内存使用率',
  `memory_total` DOUBLE NOT NULL DEFAULT 0 COMMENT '内存总量',
  `cpu_used_ratio` DOUBLE NOT NULL DEFAULT 0 COMMENT 'CPU使用率',
  `cpu_total` DOUBLE NOT NULL DEFAULT 0 COMMENT 'CPU总量',
  `product_business` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '产商',
  `port_total` INT(11) NOT NULL DEFAULT 0 COMMENT '端口总数',
  `physical_port_total` INT(11) NOT NULL DEFAULT 0 COMMENT '物理端口总数',
  `description` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '描述',
  `start_time` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '开始运行时间',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`machine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='设备详情表';

SET @Product_one = 'Maipu Electric Industrial Co., Ltd';
SET @Product_two = 'ciscoSystems';
SET @Product_three = 'HUAWEI Technology Co.,Ltd';
SET @Product_four = 'Start Network Technology Co., Ltd.';
SET @Description_one = 'MyPower (R) Operating System Software MP3840 version 6.3.6(integrity), compiled on Oct 16 2012, 04:52:26 Copyright (C) 1999 Maipu Communication Technology Co., Ltd. All Rights Reserved.';
SET @Description_two = 'Cisco IOS Software, c7600rsp72043_rp Software (c7600rsp72043_rp-ADVIPSERVICESK9-M), Version 15.2(4)S6, RELEASE SOFTWARE (fc1) Technical Support: http://www.cisco.com/techsupport Copyright (c) 1986-2014 by Cisco Systems, Inc. Compiled Fri 08-Aug-14 05:1';
SET @Description_three = 'Huawei Versatile Routing Platform Software Version: VRP (R) software, Version 5.30 USG5120BSR V100R005C00SPC300 Copyright (c) 2008-2011 Huawei Technologies Co., Ltd.';
SET @Description_four = 'Ruijie Router (RSR20-24) by Ruijie Networks Co., Ltd.';

INSERT INTO machine VALUES (1, 1, 'DLQ8', '10.192.188.66', '10.192.188.66', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (2, 1, '7609', '10.192.255.4', '10.192.255.4', 22.10, 1000, 24.00, 1000, @Product_two, 10, 5, @Description_two, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (3, 1, 'X9RN', '	10.192.255.3', '	10.192.255.3', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_two, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (4, 1, 'RM3A', '10.192.187.66', '10.192.187.66', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (5, 1, '520B', '37.40.224.1', '37.40.224.1', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (6, 1, 'BIQKJ', '37.16.224.1', '37.16.224.1', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (7, 1, '8S7R', '37.48.248.10', '37.48.248.10', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (8, 1, 'HJRR', '37.48.248.34', '37.48.248.34', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (9, 1, 'BB20', '37.0.248.22', '37.0.248.22', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (10, 1, 'C7FM', '37.0.248.38', '37.0.248.38', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (11, 1, '83JV', '37.0.248.10', '37.0.248.10', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (12, 1, '03MF', '37.0.248.42', '37.0.248.42', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (13, 1, '832HC', '37.104.248.14', '37.104.248.14', 22.10, 1000, 24.00, 1000, @Product_two, 10, 5, @Description_two, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (14, 1, 'VIW82', '37.0.248.50', '37.0.248.50', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (15, 1, 'V8W9', '37.0.248.62', '37.0.248.62', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (16, 1, '09372', '37.0.248.66', '37.0.248.66', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (17, 1, '9ENV', '37.0.248.58', '37.0.248.58', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (18, 1, 'VMWOI', '37.112.224.1', '37.112.224.1', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (19, 1, 'UV9Q', '37.32.248.2', '37.32.248.2', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (20, 1, 'AOIC', '37.32.248.10', '37.32.248.10', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (21, 1, '14EA', '37.32.248.6', '37.32.248.6', 22.10, 1000, 24.00, 1000, @Product_two, 10, 5, @Description_two, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (22, 1, '98FM', '37.32.224.1', '37.32.224.1', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (23, 1, 'O2NJ', '37.136.128.10', '37.136.128.10', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (24, 1, 'SR24', '37.0.248.46', '37.0.248.46', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (25, 1, 'WOV1', '37.0.248.34', '37.0.248.34', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (26, 1, '220B', '37.64.224.1', '37.64.224.1', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (27, 1, '47AK', '37.32.248.10', '37.32.248.10', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (28, 1, '2339M', '37.40.224.5', '37.40.224.5', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (29, 1, 'CW7R', '37.32.224.5', '37.32.224.5', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (30, 1, 'RGE9 M', '37.64.224.5', '37.64.224.5', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (31, 1, '23HJ', '37.0.244.6', '37.0.244.6', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (32, 1, 'CD09', '37.0.244.42', '37.0.244.42', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (33, 1, 'LK1J', '37.0.244.34', '37.0.244.34', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (34, 1, 'ZI328', '37.112.224.5', '37.112.224.5', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (35, 1, 'V8327', '37.0.244.62', '37.0.244.62', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (36, 1, 'V9E8', '37.0.244.66', '37.0.244.66', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (37, 1, 'C092', '37.0.244.50', '37.0.244.50', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (38, 1, 'LGM1', '37.0.244.10', '37.0.244.10', 22.10, 1000, 24.00, 1000, @Product_two, 10, 5, @Description_two, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (39, 1, 'FJ84', '37.48.224.5', '37.48.224.5', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (40, 1, 'BSRA', '37.0.244.38', '37.0.244.38', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (41, 1, 'V9382', '37.0.244.58', '37.0.244.58', 22.10, 1000, 24.00, 1000, @Product_four, 10, 5, @Description_four, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (42, 1, 'SCOQ', '37.0.244.46', '37.0.244.46', 22.10, 1000, 24.00, 1000, @Product_three, 10, 5, @Description_three, NOW(), NOW(), NOW());
INSERT INTO machine VALUES (43, 1, '09PQ', '172.16.1.38', '37.0.244.21', 22.10, 1000, 24.00, 1000, @Product_one, 10, 5, @Description_one, NOW(), NOW(), NOW());

/*
* 链路表
*/
DROP TABLE IF EXISTS `link`;
CREATE TABLE `link` (
  `link_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `link_type` INT(11) NOT NULL DEFAULT 0 COMMENT '链路类型',
  `link_status` INT(11) NOT NULL DEFAULT 0 COMMENT '链路状态',
  `from_machine` INT(11) NOT NULL DEFAULT 0 COMMENT '源设备',
  `from_machine_port` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '源设备端口',
  `to_machine` INT(11) NOT NULL DEFAULT 0 COMMENT '目的设备',
  `to_machine_port` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '目的端口',
  `brand_width` DOUBLE NOT NULL DEFAULT 0 COMMENT '带宽',
  `speed` DOUBLE NOT NULL DEFAULT 0 COMMENT '速率',
  `in_speed` DOUBLE NOT NULL DEFAULT 0 COMMENT '入速率',
  `out_speed` DOUBLE NOT NULL DEFAULT 0 COMMENT '出速率',
  `brand_width_used_ratio` DOUBLE NOT NULL DEFAULT 0 COMMENT '带宽利用率',
  `in_brand_width_used_ratio` DOUBLE NOT NULL DEFAULT 0 COMMENT '入带宽利用率',
  `out_brand_width_used_ratio` DOUBLE NOT NULL DEFAULT 0 COMMENT '出带宽利用率',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '创建时间',
  `dataChange_changeTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '最后修改时间',
  PRIMARY KEY (`link_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='链路表';

SET @Source_port = 'GigabitEthernet2/1/1.20';
SET @To_port = 'atm1/0';

INSERT INTO `link` VALUES (1, 0, 2, 4, @Source_port, 27, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (2, 0, 2, 27, @Source_port, 5, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (3, 0, 2, 22, @Source_port, 20, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (4, 0, 2, 27, @Source_port, 23, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (5, 0, 2, 34, @Source_port, 43, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (6, 0, 2, 43, @Source_port, 39, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (7, 0, 2, 43, @Source_port, 28, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (8, 0, 2, 43, @Source_port, 37, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (9, 0, 2, 12, @Source_port, 27, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (10, 0, 2, 43, @Source_port, 35, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (11, 0, 2, 27, @Source_port, 6, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (12, 0, 2, 27, @Source_port, 15, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (13, 0, 2, 43, @Source_port, 27, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (14, 0, 2, 43, @Source_port, 32, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (15, 0, 2, 27, @Source_port, 14, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (16, 0, 2, 27, @Source_port, 18, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (17, 0, 2, 27, @Source_port, 24, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (18, 0, 2, 43, @Source_port, 29, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (19, 0, 2, 43, @Source_port, 36, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (20, 0, 2, 43, @Source_port, 42, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (21, 0, 2, 43, @Source_port, 31, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (22, 0, 2, 27, @Source_port, 16, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (23, 0, 2, 27, @Source_port, 26, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (24, 0, 2, 43, @Source_port, 41, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (25, 0, 2, 27, @Source_port, 22, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (26, 0, 2, 27, @Source_port, 17, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (27, 0, 2, 43, @Source_port, 38, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (28, 0, 2, 27, @Source_port, 9, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (29, 0, 2, 43, @Source_port, 30, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (30, 0, 2, 27, @Source_port, 11, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (31, 0, 2, 3, @Source_port, 2, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (32, 0, 2, 2, @Source_port, 1, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (33, 0, 2, 4, @Source_port, 3, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (34, 0, 2, 27, @Source_port, 10, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (35, 0, 2, 43, @Source_port, 33, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (36, 0, 2, 43, @Source_port, 40, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (37, 0, 2, 27, @Source_port, 25, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (38, 0, 2, 22, @Source_port, 19, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (39, 0, 2, 22, @Source_port, 21, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (40, 0, 2, 9, @Source_port, 7, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (41, 0, 2, 14, @Source_port, 13, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
INSERT INTO `link` VALUES (42, 0, 2, 9, @Source_port, 8, @To_port, 24, 25.2, 12.45, 32.34, 0.33, 0.4349, 0.2347, NOW(), NOW());
