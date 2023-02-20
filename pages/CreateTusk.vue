<template>
    <div class="CreateTusk">
        <div class="container">
            <div class="CreateTusk__content">
        <h1 class="CreateTusk__title">Create your tusk</h1>
        <postForm ></postForm>
</div>

</div>
</div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" >

.lenght{
    text-align: right;
}
.tags{

        
    margin:10px 0;
    &__nameTags{ 
    display: inline-block;
    background: #e7e7e7e7;
    border-radius: 14px;
    padding:0 12px;
    height: 32px;
    line-height: 32px;
    background-color: #e4e4e4;
    margin-bottom: 5px;
    margin-right: 5px;
    }
    &__button{
    border:none;
    background: none;
    cursor: pointer;
    font-weight: 300;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    float: right;
    font-size: 16px;
    line-height: 32px;
    padding-left: 8px;
//  &::before{
//     content: ""; position: absolute; width: 15px; height: 1.5px; background: rgb(0, 0, 0)
//  }
//  &::after{
//     content: ""; position: absolute; width:15px; height: 1.5px; background: rgb(0, 0, 0)
//  }

// &::before {transform: rotate(45deg);}
// &::after {transform: rotate(-45deg);}

}
}

.container{
 margin: 0 auto;
max-width: 600px;
}
.CreateTusk {

   
    &__content{
        min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
        flex-direction: column;
    }
&__title {
   
    font-size: 40px;
   margin:20px 0;
    letter-spacing: 3px;
    font-family: 'Courier New', Courier, monospace;
}

}

div.user-input-wrp {
    display: flex;
  flex-direction: column-reverse;

 
}

 textarea,input.inputText{
    border: none;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid #bdbdbd;
  outline: none;  
  
}
label.floating-label{
  font-size: 24px;
  padding-left: 0.5rem;
  color: #919191;
  transform: translateY(5.4rem);
  transform-origin: left top;
  cursor: text;
  transition: all 0.3s;
  &__descrip{
    transform: translateY(2.4rem);
  }
}

.user-input-wrp:not(:placeholder-shown)  .inputText:focus

{
	border-color: blue;
  outline-color: blue;
}


// .user-input-wrp .floating-label {
//     color:#bababae7;
// 	position: absolute;
// 	pointer-events: none;
// 	top: 20px;
// 	left: 0px;
// 	transition: 0.2s ease all;
//  &__descrip{
   
//     color:#bababae7;
// 	position: absolute;
// 	pointer-events: none;
// 	top: 40px;
// 	left: 0px;
// 	transition: 0.2s ease all;
//  }
// }

.user-input-wrp input:focus ~ .floating-label,
.user-input-wrp input:not(:placeholder-shown) ~ .floating-label{
  padding: 0;
   color: blue;
  transform: translateY(2rem) scale(0.8);
}
.user-input-wrp textarea:focus ~ .floating-label,
.user-input-wrp textarea:not(:placeholder-shown) ~ .floating-label{
    padding: 0;
   color: blue;
  transform: translateY(0rem) scale(0.8);
}


.form {
    
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    
&__inputs {   
   
     flex-direction: column;
    display: flex;
   
    padding:10px 5px;
}

&__button {
    margin:10px 0;
button{

    background: none;
    border:none;
    font-size:20px;
    letter-spacing: 3px;
    color:white;
    padding:10px;
    cursor:pointer;
   
      background-color: rgba(77, 21, 130, 0.744);
    border-radius: 4px;
    &:active{
        position: relative;
        left:0;
        top:4px;
    }
    
}

}

}

textarea::-webkit-scrollbar{
    width: 0px;
}
.decrtiption{
  width:60%;
    &__text{
      width:100%;
    height: 33px;
    margin: 10px 0;
    padding: 0 5px;
    resize:none;
    }
}
.inputs {
    text-align: left;
    margin: 10px 0;
}

textarea.decrtiption__text.text.inputText.inputText__border.limit {
    border-bottom: 1px solid red;
    outline-color: red;
}


.Lenghtlimit, span.Lenghtlimit{
        color:red;
        animation: Lenghtlimit 0.5s cubic-bezier(.36,.07,.19,.97)
    }
    @keyframes Lenghtlimit{
        10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
    }
    
</style>