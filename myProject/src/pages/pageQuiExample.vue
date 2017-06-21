<template>
  <div id="qui-exp">
    <ol>
      <li v-for="(todo,index) in todos">{{index}}-{{todo.text}}</li>
    </ol>
    <p>{{message}}</p>
    <p>{{fullName}}</p>
    <qui-btn msg="按钮" class="default" v-on:btnClickEvent="doSth">
      <img class="icon" src="../img/diamond.png" slot="icon" alt="">
    </qui-btn>
    <input type="text" v-model="message">
    <input type="checkbox" v-model="checked" id="checkbox">
    <label for="checkbox">{{checked}}</label>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label><br>
    <span>Checked names: {{ checkedNames }}</span><br>

    <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      <list-com  v-for="(todoa, index) in todoss" :title="todoa" v-on:remove="todoss.splice(index, 1)"></list-com>
    </ul>

    <ul>
      <li>
        <qui-btn :msg="msg" class="default" v-on:btnClickEvent="addCounter">
        </qui-btn>
      </li>
      <li>
        <qui-btn :msg="msg" class="default" v-on:btnClickEvent="addCounter">
        </qui-btn>
      </li>
      <li>
        <qui-btn :msg="msg" class="default" v-on:btnClickEvent="addCounter">
        </qui-btn>
      </li>
    </ul>

    <ul>
      <li v-for="(list,index) in lists"  v-bind:key="list._id">{{index}}-{{list.title}}</li>
    </ul>
    <select name="" id="" v-model="selected">
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
    <span>Selected: {{selected}}</span>
    <button v-on:click="showEvent">Event</button>
    <button v-on:click="showEvent($event)">Event</button>
    <div v-if="showAnimation" transition="my-startup">animation</div>
    <div @click="showAni">aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'
  import listCom from '../components/listComponent.vue'
  import Vue from 'vue'
  console.log(listCom)
  var Message = Vue.extend({
    props: ['content'],
    template: '<h1>{{content}}</h1>'
  })
  Vue.component('message', Message)
  export default{
    name: 'qui-exp',
    components: {
      'qui-btn': quiBtn,
      'list-com': listCom
    },
    data () {
      return {
        todos: [
          {text: 'this is first'},
          {text: 'this is second'},
          {text: 'this is third'}
        ],
        todoss: [
          'Do the dishes',
          'Take out the trash',
          'Mow the lawn'
        ],
        lists: [
          {_id: 1, title: 'this is first'},
          {_id: 2, title: 'this is second'},
          {_id: 3, title: 'this is third'}
        ],
        message: 'hello vue!',
        firstName: 'joe',
        lastName: 'crowd',
        checked: 'false',
        checkedNames: [],
        newTodoText: '',
        msg: 0,
        cents: 100,
        showAnimation: false,
        selected: ''
      }
    },
    methods: {
      doSth: function () {
        this.message = this.message.split('').reverse().join('')
      },
      addNewTodo: function () {
        this.todoss.push(this.newTodoText)
        this.newTodoText = ''
      },
      addCounter: function () {
        this.msg += 1
      },
      showEvent: function (event) {
        console.log(event)
      },
      showAni: function () {
        this.showAnimation = true
      }
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      },
      price: {
        set: function (newValue) {
          this.cents = newValue * 100
        },
        get: function () {
          return (this.cents / 100).toFixed(2)
        }
      }
    }
  }
</script>
<style>
  #qui-exp {
    text-align: left;
  }
  .my-startup-transition {
    　transition: all 1s ease;
    　width: 100px; height: 100px;
    　background: black;
    　opacity: 1;
  }
  .my-startup-enter, .my-startup-leave{
    　height: 0px;
    　opacity: 0;
  }
</style>
