<template>
  <div class="modal" v-if="modalon" @click="modalon = false">
    <div class="modal-body">
      <div>🔊환영합니다.🎈</div>
    </div>
  </div>

  <div id="container">
    <div id="chatid1">
      <span
        >대화명
        <input
          id="chatidi"
          @input="myname = $event.target.value"
          placeholder="대화명을 입력하세요."
        />
        <input
          type="button"
          value="확인"
          @click="[makeName(), (modalon = true)]"
        />
      </span>
      <span v-if="myname !== '익명'">대화명:{{ myname }}</span>
    </div>

    <div id="messages">
      <div class="chat-line" v-for="(chat, i) in chatData" :key="i">
        {{ chat }}
      </div>
    </div>
    <div id="chatid2">
      귓속말:
      <input type="checkbox" @click="ck = $event.target.checked" />
      <input :disabled="!ck" v-model="toname" placeholder="상대이름" />에게
    </div>

    <div id="send">
      <input
        id="input"
        v-model="message"
        autocomplete="off"
        @keyup.enter="sendMessage()"
      />
      <button @click="sendMessage()">전송</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat",
  setup() {},
  created() {
    this.$socket.on("chat", (data) => {
      console.log(data.message);
      const dataA = data.id + "님" + data.message;
      this.chatData.push(dataA);
    });
  },
  data() {
    return {
      chatData: [],
      myname: "익명",
      toname: "",
      ck: false,
      message: "",
      modalon: false,
    };
  },
  methods: {
    makeName() {
      this.$socket.emit("chat", {
        id: this.myname,
        message: `${this.myname}을 이름으로 바꾸셨습니다.`,
      });
      this.message = "";
    },
    sendMessage() {
      this.$socket.emit("chat", {
        message: this.message,
        id: this.myname,
        toid: this.toname,
      });
      console.log(this.message);
    },
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  min-height: 500px;
  margin: 0;
  padding-bottom: 3em;
}
#container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
#messages {
  height: 450px;
  background: #f1eaea;
  text-align: left;
  overflow-y: auto;
}

#send {
  margin: 5px;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
#chatid1 {
  /* text-align: right; */
  display: flex;
  justify-content: space-between;
}
#chatid2 {
  text-align: right;
  margin-right: 5px;
}
#input {
  height: 100%;
  width: 60%;
  border: none;
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 32px;
  margin: 0;
  border-bottom: 1px solid #564949;
}
button {
  /* margin: 0; */
  width: 25%;
  height: 100%;
  background: #333;
  border: none;
  padding: 0.1em;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
}
.modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 30px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.5);
}
</style>
