'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{
    async index(){
        this.ctx.body="api接口"
    }

    async getArticleList(){
        let sql = 'SELECT article.Id as id,'+
            'article.title as title,'+
            'article.article_brief as introduce,'+
            "FROM_UNIXTIME(article.time,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
            'article.view_count as view_count ,'+
            'type.typeName as typeName '+
            'FROM article LEFT JOIN type ON article.type_id = type.Id'

        const results = await this.app.mysql.query(sql)

        this.ctx.body={
            data:results
        }
    }

    async getArticleById(){
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id

        let sql = 'SELECT article.Id as id,'+
            'article.title as title,'+
            'article.article_brief as introduce,'+
            'article.article_content as article_content,'+
            "FROM_UNIXTIME(article.time,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
            'article.view_count as view_count ,'+
            'type.typeName as typeName ,'+
            'type.Id as typeId '+
            'FROM article LEFT JOIN type ON article.type_id = type.Id '+
            'WHERE article.Id='+id


        const result = await this.app.mysql.query(sql)
        this.ctx.body={data:result}

    }

    async getTypeInfo(){
        const result = await this.app.mysql.select('type')
        this.ctx.body = {data:result}
    }

    async getListById(){
        let id = this.ctx.params.id
        let sql = 'SELECT article.Id as id,'+
            'article.title as title,'+
            'article.article_brief as introduce,'+
            "FROM_UNIXTIME(article.time,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
            'article.view_count as view_count ,'+
            'type.typeName as typeName '+
            'FROM article LEFT JOIN type ON article.type_id = type.Id '+
            'WHERE type_id='+id
        const result = await this.app.mysql.query(sql)
        this.ctx.body={data:result}

    }
}

module.exports = HomeController