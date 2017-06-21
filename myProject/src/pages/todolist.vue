<template>
  <div id="todo">
    <div class="container-fluid">
      <div class="row">
        <div class="nav">
          <strong>To Do List</strong>
          <!--搜索框-->
          <div class="input-group ser">
            <div class="input-group-addon glyphicon glyphicon-search" style="cursor:pointer"></div>
            <input type="text" class="form-control" id="search" placeholder="搜索" style="margin-top:2px;" v-model="title">
          </div>
        </div>
        <div class="left col-xs-3 col-sm-3">
          <!--已完成-->
          <div class="done" @click="toggle1">
            <span class="glyphicon glyphicon-ok-sign"></span>
            已完成 <span class="num">{{doneNum}}</span>
          </div>
          <!--计划列表-->
          <div class="done done1" @click="toggle2">
            <span class="glyphicon glyphicon-list"></span>
            计划列表
          </div>
          <div class="list"  style="border-bottom: 1px solid #fff" v-for="item in newPlanList">
            <div class="listcon">
              <input type="text"  style="background: #ccc" v-model="item.title" @focus="showList(item)" @change="changeList(item.id)" v-bind:key="item.id">
              <span class="glyphicon glyphicon-trash remove" @click="removeList(item.id)"></span>
            </div>
          </div>
          <!--添加列表-->
          <div class="add-list" @click="addList">
            <span class="glyphicon glyphicon-plus"></span>
            添加列表
          </div>
        </div>
        <div class="col-xs-9 col-sm-9 right" v-if="show">
          <div class="header">
            <div class="title">{{curInner.title}}</div>
            <div class="add-con glyphicon glyphicon-plus" @click="addSon(curInner.id)"></div>
          </div>
          <!--内容列表-->
          <div class="list" v-for="child in newChildPlan">
            <div class="listcon">
              <span class="glyphicon glyphicon-record" @click="finish(child)"></span>
              <input type="text" style="background: #eee" v-model="child.title" @change="changeInner(child.id)">
              <span class="glyphicon glyphicon-trash remove" @click="removeInner(child.id)"></span>
            </div>
          </div>
        </div>
        <div class="col-xs-9 col-sm-9 right" v-if="!show">
          <div class="header">
            <div class="title">
              已完成
            </div>
          </div>
          <!--内容列表-->
          <div class="list">
            <div class="listcon" v-for="finish in newFinishList">
              <input type="text"  style="background: #eee" v-model="finish.title">
              <span class="glyphicon glyphicon-trash remove" @click="removeFinish(finish.id)"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var planList = localStorage.messages ? JSON.parse(localStorage.messages) : []
  var finishList = localStorage.finishInfo ? JSON.parse(localStorage.finishInfo) : []
  var doneNum = finishList.length
  export default{
    name: 'qui-todo',
    data () {
      return {
        doneNum: doneNum,
        show: true,
        planList: planList,
        curInner: {},
        childPlan: [],
        finishList: finishList,
        search: '',
        title: ''
      }
    },
    methods: {
      toggle1: function () {
        this.show = false
      },
      toggle2: function () {
        this.show = true
      },
      addList: function () {
        var maxId = this.getMaxId(planList)
        var obj = {id: maxId + 1, title: '新建note', son: []}
        planList.push(obj)
        localStorage.messages = window.JSON.stringify(planList)
      },
      changeList: function (id) {
        localStorage.messages = window.JSON.stringify(planList)
      },
      getMaxId: function (arr) {
        if (arr.length > 0) {
          var temp = arr[0].id
          for (var i = 0; i < arr.length; i++) {
            if (temp < arr[i].id) {
              temp = arr[i].id
            }
          }
        } else {
          temp = 0
        }

        return parseInt(temp)
      },
      getIndex: function (id, listArr) {
        var arrList = listArr || planList
        for (var i = 0; i < arrList.length; i++) {
          if (id === arrList[i].id) {
            return i
          }
        }
      },
      removeList: function (id) {
        var index = this.getIndex(id)
        console.log(index)
        planList.splice(index, 1)
        localStorage.messages = window.JSON.stringify(planList)
      },
      showList: function (item) {
        this.curInner = item
        this.childPlan = item.son
      },
      addSon: function (id) {
        console.log(this.curInner.son)
        var index = this.getIndex(id)
        var curId = this.getMaxId(this.curInner.son)
        var obj = {id: curId + 1, title: '新建内容'}
        planList[index].son.push(obj)
        this.childPlan = planList[index].son
        localStorage.messages = window.JSON.stringify(planList)
      },
      changeInner: function () {
        localStorage.messages = window.JSON.stringify(planList)
      },
      removeInner: function (id) {
        for (var i = 0; i < this.childPlan.length; i++) {
          if (id === this.childPlan[i].id) {
            this.childPlan.splice(i, 1)
          }
        }
        localStorage.messages = window.JSON.stringify(planList)
      },
      finish: function (item) {
        this.finishList.push(item)
        var index = this.getIndex(item.id, this.childPlan)
        this.childPlan.splice(index, 1)
        this.doneNum += 1
        localStorage.messages = window.JSON.stringify(planList)
        localStorage.finishInfo = window.JSON.stringify(this.finishList)
      },
      removeFinish: function (id) {
        for (var i = 0; i < this.finishList.length; i++) {
          if (id === this.finishList[i].id) {
            this.finishList.splice(i, 1)
          }
        }
        localStorage.finishInfo = window.JSON.stringify(this.finishList)
        this.doneNum -= 1
      }
    },
    computed: {
      newPlanList: function () {
        var that = this
        return that.planList.filter(function (item) {
          return item.title.toLowerCase().indexOf(that.title.toLowerCase()) !== -1
        })
      },
      newChildPlan: function () {
        var that = this
        return that.childPlan.filter(function (child) {
          return child.title.toLowerCase().indexOf(that.title.toLowerCase()) !== -1
        })
      },
      newFinishList: function () {
        var that = this
        return that.finishList.filter(function (finish) {
          return finish.title.toLowerCase().indexOf(that.title.toLowerCase()) !== -1
        })
      }
    }
  }
</script>
<style>
   @import "../../node_modules/bootstrap/css/bootstrap.css";
   @import "../assets/css/todolist.css";
   #todo{
     position: absolute;
     width: 100%;
     height: 100%;
     left: 0;
     top: 0;
     text-align: left;
   }
</style>
