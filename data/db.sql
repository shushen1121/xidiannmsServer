DROP DATABASE IF EXISTS `xidiannms`;
CREATE DATABASE `xidiannms`;
USE `xidiannms`;

DROP TABLE IF EXISTS account;
CREATE TABLE `account` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `account` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '账户名称',
  `password` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '密码',
  `email` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '邮箱',
  `authority` INT(11) NOT NULL DEFAULT 0 COMMENT '权限值',
  `dataChange_createTime` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='账户信息表';

INSERT INTO `account` VALUES (1, 'admin', 'admin', '793289218@qq.com', 2, now());
INSERT INTO `account` VALUES (2, '123456', '666666', '793289218@qq.com', 2, now());
INSERT INTO `account` VALUES (3, '654321', '111111', '793289218@qq.com', 1, now());
INSERT INTO `account` VALUES (4, '333333', '333333', '793289218@qq.com', 2, now());

DROP TABLE IF EXISTS info;
CREATE TABLE `info` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '局域网名称',
  `equipNum` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '设备数',
  `startDate` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '建立时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='局域网概况表';

INSERT INTO `info` VALUES (1, '物理实验室', 10, NOW());
INSERT INTO `info` VALUES (2, '化学实验室', 11, NOW());
INSERT INTO `info` VALUES (3, '生物实验室', 12, NOW());

DROP TABLE IF EXISTS `os0`;
CREATE TABLE `os0` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `endianness` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '主机名称',
  `hostname` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'CPU字节序',
  `type` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '操作系统',
  `platform` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '编译操作系统',
  `arch` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'CPU架构',
  `release` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '操作系统发行版本',
  `totalmem` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '内存总量',
  `ip` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'IP地址',
  `productDate` datetime(3) NOT NULL default CURRENT_TIMESTAMP(3) COMMENT '出产日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='设备详情表';

INSERT INTO `os0` VALUES (1, '主机1号', 'LE', 'Windows_NT', 'Win32', 'x64', '10.0', '400000000', '192.168.1.100', NOW());
INSERT INTO `os0` VALUES (2, '主机2号', 'LE', 'Windows_NT', 'Win32', 'x64', '10.0', '400023423', '192.168.1.101', NOW());
INSERT INTO `os0` VALUES (3, '主机3号', 'LE', 'Linux', 'Linux', 'x32', '3.2', '349082942', '192.168.1.102', NOW());

DROP TABLE IF EXISTS `topo`;
CREATE TABLE `topo` (
  `tp_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `from` INT(11) NOT NULL DEFAULT 0 COMMENT '开始节点',
  `to` INT(11) NOT NULL DEFAULT 0 COMMENT '结束节点',
  PRIMARY KEY (`tp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='网络拓扑连接表';

INSERT INTO `topo` VALUES (1, 1, 2);
INSERT INTO `topo` VALUES (2, 1, 3);
INSERT INTO `topo` VALUES (3, 2, 1);
INSERT INTO `topo` VALUES (4, 3, 1);
INSERT INTO `topo` VALUES (5, 2, 3);
INSERT INTO `topo` VALUES (6, 3, 2);
