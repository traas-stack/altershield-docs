---
hide_title: true
sidebar_label: 部署文档
pagination_next: null
---

# 部署文档

本部署教程一共包含了三个部分部署：
+ AlterShield主端
+ AlterShield-Operator
+ AlterShield-Defender(算法服务)

仅提供了DEV版本部署方案，请谨慎用于直接生产！！！

## AlterShield主端部署

AlterShield依赖的中间件：Mysql(建议8.0）。 相关DDL见主端根目录下[ddl.sql](https://github.com/traas-stack/altershield/blob/main/ddl.sql)

一个新接入的变更平台需要注册：变更类型、变更平台、变更场景。
由于当前没有Dashboard，提供了SQL的方式快速创建一个用于Operator接入使用的变更元数据。

```sql
-- sequence
INSERT INTO altershield.altershield_sequence (name, gmt_create, gmt_modified, value, min_value, max_value, step) VALUES ('seq_default', '2023-11-30 20:40:59', '2023-12-14 10:55:18', 14697005001, 0, 2821109907455, 1000);

-- changeType
INSERT INTO altershield.altershield_meta_change_type (id, gmt_create, gmt_modified, type, name, type_desc, category) VALUES ('20231207012470220000000000XX06R25Q0Q', '2023-12-07 17:06:22', '2023-12-07 17:06:22', 'pass.pod', 'pod', 'pod', 'contentType');
INSERT INTO altershield.altershield_meta_change_type (id, gmt_create, gmt_modified, type, name, type_desc, category) VALUES ('20231207012470220000000000XX06R25Q0R', '2023-12-07 17:06:22', '2023-12-07 17:06:22', 'pass.pod', 'pod', 'pod', 'effectiveTargetType');
INSERT INTO altershield.altershield_meta_change_type (id, gmt_create, gmt_modified, type, name, type_desc, category) VALUES ('20231207012470220000000000XX06R25Q0S', '2023-12-07 17:06:22', '2023-12-07 17:06:22', 'pass.pod', 'pod', 'pod', 'changeTargetType');

-- chanePlatform
INSERT INTO altershield.altershield_meta_platform (id, gmt_create, gmt_modified, platform_name, owner, description, token, scope, tenant) VALUES ('20231207012470240000000000XX06R25Q0P', '2023-12-07 17:06:08', '2023-12-07 17:06:08', 'kubernetes', 'system', null, 'altershield-operator', null, null);

-- changeScene
INSERT INTO altershield.altershield_meta_change_scene (id, gmt_create, gmt_modified, tenant_code, server_tenant_code, name, change_scene_key, owner, generation, risk_info, platform_name, scope, description, effective_target_type, change_content_type, change_target_type, change_effective_config_json_ref, callback_config_json_ref, tags_json_ref, status) VALUES ('20231207012470200000000000XX06R25QSJ', '2023-12-07 17:12:51', '2023-12-07 17:12:51', 'default', 'default', 'kubernetes分批发布', 'com.alipay.alitershield.kubernetes.rollingupdate', 'system', 'G2', null, 'kubernetes', null, null, 'paas.pod', 'paas.pod', 'paas.pod', '20231207012470100000000000XX06R25QSK', '20231207012470100000000000XX06R25QSL', null, 1);
INSERT INTO altershield.altershield_meta_change_step (id, gmt_create, gmt_modified, name, change_scene_key, change_key, step_type, defence_config_json_ref, change_content_type, effective_target_type, change_target_type) VALUES ('20231207012470210000000000XX06R25QSH', '2023-12-07 17:12:51', '2023-12-07 19:30:30', 'kubernetes分批发布变更工单', 'com.alipay.alitershield.kubernetes.rollingupdate', 'com.alipay.alitershield.kubernetes.rollingupdate', 'STEP_ORDER', '{"enablePostCheck":true,"enablePreCheck":true,"postCheckTimeout":30000,"preCheckTimeout":30000}', null, null, 'paas.pod');
INSERT INTO altershield.altershield_meta_change_step (id, gmt_create, gmt_modified, name, change_scene_key, change_key, step_type, defence_config_json_ref, change_content_type, effective_target_type, change_target_type) VALUES ('20231207012470210000000000XX06R25QSI', '2023-12-07 17:12:51', '2023-12-07 19:30:30', 'kubernetes分批发布变更分批', 'com.alipay.alitershield.kubernetes.rollingupdate', 'com.alipay.alitershield.kubernetes.rollingupdate._batch', 'STEP_GRAY_BATCH', '{"enablePostCheck":true,"enablePreCheck":true,"postCheckTimeout":30000,"preCheckTimeout":30000}', null, null, 'paas.pod');
INSERT INTO altershield.altershield_key_value (name, serial_num, gmt_create, gmt_modified, value) VALUES ('20231207012470100000000000XX06R25QSK', 1, '2023-12-07 20:39:15', '2023-12-07 20:39:15', '{"changeGrayEnvType":"ENV","changeGrayModeType":"PIPELINE","enableRollback":false}');
INSERT INTO altershield.altershield_key_value (name, serial_num, gmt_create, gmt_modified, value) VALUES ('20231207012470100000000000XX06R25QSL', 1, '2023-12-07 20:39:15', '2023-12-07 20:39:15', '{"callbackConfig":{"DEFAULT":"http://192.168.120.189:8080/openapi/opscloud/callback"},"signVersion":"1.0"}');

-- defenseRule
INSERT INTO altershield.altershield_meta_defender_rule (id, gmt_create, gmt_modified, name, suggestion, owner, stage, status, exception_strategy, defense_range_type, defense_range_key, external_id, tenant, delay_second, plugin_key, main_class, plugin_invoke_type, ignore_tag, max_detect_second, arg_ref, change_filter_ref) VALUES ('20231214012474030000000000XX06R27SVZ', '2023-12-14 14:10:55', '2023-12-14 14:10:55', '智能监控规则', '', 'system', 'POST', 'DISABLED', 'BLOCK', 'CHANGE_BATCH', 'com.alipay.alitershield.kubernetes.rollingupdate._batch', null, null, 0, 'monitor_metric_detection_plugin', 'com.alipay.altershield.shared.pluginmarket.innerplugin.defender.MonitorMetricDetectionPlugin', 'ASYNC', 'IGNORE', 0, null, null);

```

在主端altershield-bootstrap目录更新`application-dev.yaml`更新到自己的数据库地址，目前dev镜像默认配置如下：
```yaml
spring:
  datasource:
    jdbc-url: jdbc:mysql://localhost:3306/altershield?allowPublicKeyRetrieval=true&useSSL=false
    username: altershield
    password: altershield
```

### 使用Docker部署

**ps：按照默认配置创建好数据库并初始化数据。**

`platform：linux/amd64`

`docker push altershield/altershield:dev-1.0.0`

`docker run -d -p 8080:8080 altershield/altershield:dev-1.0.0`

### 使用K8S-yaml部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: altershield-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: altershield
  template:
    metadata:
      labels:
        app: altershield
    spec:
      containers:
        - name: altershield
          image: altershield/altershield:dev-1.0.0
          ports:
            - containerPort: 8080
```

## Operator部署

### 使用K8S部署

## 算法部署

更多详细信息前往[monitor-check仓库](https://github.com/traas-stack/altershield-monitorCheck/blob/main/README_CN.md)查看

### 使用Docker部署

`docker pull altershield/altershield-defender:monitor-check-beta-1.0.0`

`docker run -d -p 8083:8083 altershield/altershield-defender:monitor-check-beta-1.0.0`
### 使用K8S部署
创建Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: monitor-check-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: monitor-check-beta
  template:
    metadata:
      labels:
        app: monitor-check-beta
    spec:
      containers:
      - name: monitor-check-beta
        image: altershield/altershield-defender:monitor-check-beta-1.0.0
        ports:
        - containerPort: 8083
```

创建Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: bmc-test-svc
  namespace: bmc-test
spec:
  ports:
  - port: 8083
    protocol: TCP
    targetPort: 8083
  selector:
    app: bmc-test-v3 # 这里需要绑定app
  type: ClusterIP
```


**ps：一键部署方案后续将会开放**