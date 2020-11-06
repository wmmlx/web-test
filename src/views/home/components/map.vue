<template>
    <div class="map-wrapper">
        <div class="container-c map_container">
            <div class="container-c-bg-1"></div>
            <div class="container-c-bg-2"></div>
            <div class="container-c-bg-3"></div>
            <div class="container-c-bg-4"></div>
            <div class="container-c-bg-5"></div>
            <div class="container-c-bg-6"></div>
            <div class="text">
                <span> total data </span>
                <span id="number1" class="odometer">
                     <countTo :startVal='123400' :endVal='123456' :duration='6000' separator=""></countTo>
                </span>
            </div>
            <div class="dipan">
                <div class="dipan-1"></div>
                <div class="dipan-2"></div>
                <div class="dipan-3"></div>
                <div class="dipan-4"></div>
                <div class="dipan-5"></div>
                <div class="dipan-6"></div>
                <div class="dipan-7"></div>
                <div class="dipan-8"></div>
            </div>
            <div class="line">
                <svg version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="670px" height="410px" viewBox="0 0 670 410" enable-background="new 0 0 670 410" xml:space="preserve">
                    <defs>
                        <linearGradient id="linear1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#F18D37"></stop>
                            <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                        </linearGradient>
                        <linearGradient id="linear2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#F6ED62"></stop>
                            <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                        </linearGradient>
                        <linearGradient id="linear3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#29A6B2"></stop>
                            <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                        </linearGradient>
                        <linearGradient id="linear4" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#B0484A"></stop>
                            <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
                        </linearGradient>
                    </defs>
                    <g id="line">
                        <path id="line-anim-1" class="line-anim" stroke="url(#linear1)" stroke-dasharray="2.9725,2.9725" d="M263.713,360.092c-16.944-16.828-86.188-94.197-84.129-228.802"></path>
                        <path class="line-anim" stroke="url(#linear2)" stroke-dasharray="3.03,3.03" d="M195.381,332.049c-23.122-13.617-125.904-85.271-88.132-263.139"></path>
                        <path class="line-anim line-anim-1" stroke="url(#linear3)" stroke-dasharray="3.0169,3.0169" d="M1.602,170.091C58.489,339.832,184.163,367.76,206.939,372.799"></path>
                        <path class="line-anim" stroke="url(#linear4)" stroke-dasharray="2.9929,2.9929" d="M282.824,345.443c-12.591-22.781-65.813-131.172-34.45-285.345"></path>
                        <path class="line-anim" stroke="url(#linear1)" stroke-dasharray="3.0179,3.0179" d="M456.115,321.518c23.807-20.258,142.041-132.769,36.397-282.367"></path>
                        <path class="line-anim" stroke="url(#linear2)" stroke-dasharray="3.0012,3.0012" d="M430.25,356.545c23.005-4.92,118.806-32.508,161.039-161.731"></path>
                        <path class="line-anim line-anim-1" stroke="url(#linear3)" stroke-dasharray="2.9746,2.9746" d="M669.81,138.042c-63.754,207.86-205.795,228.686-229.947,232.467"></path>
                        <path class="line-anim" stroke="url(#linear4)" stroke-dasharray="3.0057,3.0057" d="M416.397,335.713c18.084-17.281,92.481-98.434,40.521-220.563"></path>
                    </g>
                </svg>
                <div class="line-d-1"></div>
                <div class="line-d-2"></div>
                <div class="line-d-3"></div>
                <div class="line-d-4"></div>
                <div class="line-d-5"></div>
                <div class="line-d-6"></div>
                <div class="line-d-7"></div>
                <div class="line-d-8"></div>
                <div class="line-text-c">
                    <div class="line-text-c-1"><span> text one </span><span class="odometer">4567</span></div>
                    <div class="line-text-c-2"><span> text two </span><span class="odometer">4567</span></div>
                    <div class="line-text-c-4"><span> text three </span><span class="odometer">4567</span></div>
                    <div class="line-text-c-5"><span> text four </span><span class="odometer">4567</span></div>
                </div>
            </div>
            <div class="tc-container">
                <div class="tc-left tc-left-1 tc-anim">one</div>
                <div class="tc-left tc-left-2 tc-anim">two</div>
                <div class="tc-right tc-right-1 tc-anim">three</div>
                <div class="tc-right tc-right-2 tc-anim">four</div>
            </div>
            <div class="line-sx">
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
                <div class="line-fs"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import countTo from 'vue-count-to'
    export default {
        data () {
            return {}
        },
        components: {
            countTo
        },
        mounted() {
        }
    }
</script>
<style lang="scss">
    .map-wrapper{
        flex: 1;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-top: 30px;
        .map_container{
            position:absolute !important;
            overflow:hidden;
            display:block;
            cursor: default;
            z-index: 0;
            width: 927px;
            height: 600px;
            transform: scale(0.7);
        }
        .container-c .cqiu {
            position: absolute;
            width: 278px;
            height: 278px;
            top: 50%;
            left: 50%;
            margin: -139px 0 0 -139px;
        }
        .container-c{
            position: relative;
        }
        .container-c [class^=container-c-bg-] {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .container-c .container-c-bg-1 {
            z-index: 1;
            background: -webkit-radial-gradient(rgba(0, 191, 243, 0.5), transparent 60%);
            background: -moz-radial-gradient(rgba(0, 191, 243, 0.5), transparent 60%);
            background: -o-radial-gradient(rgba(0, 191, 243, 0.5), transparent 60%);
            background: radial-gradient(rgba(0, 191, 243, 0.5), transparent 60%);
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            -webkit-filter: blur(100px);
            filter: blur(100px);
            display: none;
        }
        .container-c .container-c-bg-2 {
            background: url(../../../assets/cloud/center-bg-2.png) no-repeat 50% 188px;
            z-index: 2;
        }
        .container-c .container-c-bg-3 {
            background: url(../../../assets/cloud/center-bg-3.png) no-repeat 50% 40%;
            z-index: 3;
        }
        .container-c .container-c-bg-4 {
            background: url(../../../assets/cloud/center-bg-4.png) no-repeat 50% top;
            z-index: 4;
        }
        .container-c .container-c-bg-5 {
            background: url(../../../assets/cloud/pd-main-left-bg-tree.png) no-repeat 50% 60%, url(../../../assets/cloud/center-bg-5.png) no-repeat 50% 40%;
            background-blend-mode: screen;
            z-index: 6;
        }
        .container-c .container-c-bg-6 {
            background: url(../../../assets/cloud/center-bg-6.png) no-repeat 50% 50%;
            z-index: 5;
            -webkit-animation: rotate 6s infinite linear;
            -moz-animation: rotate 6s infinite linear;
            -o-animation: rotate 6s infinite linear;
            animation: rotate 6s infinite linear;
        }
        @-webkit-keyframes rotate {
            0% {
                -webkit-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @-moz-keyframes rotate {
            0% {
                -webkit-transform-origin: center;
                -moz-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform-origin: center;
                -moz-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @-o-keyframes rotate {
            0% {
                -webkit-transform-origin: center;
                -o-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform-origin: center;
                -o-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(360deg);
                -o-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @keyframes rotate {
            0% {
                -webkit-transform-origin: center;
                -moz-transform-origin: center;
                -o-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform-origin: center;
                -moz-transform-origin: center;
                -o-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -o-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        .container-c .text {
            position: absolute;
            width: 100%;
            top: 39%;
            z-index: 9;
            text-align: center;
            color: #00195f;
            font-size: 24px;
        }
        .container-c .text > span:nth-child(1) {
            display: block;
            margin-bottom: 10px;
        }
        .container-c .text > span:nth-child(2) {
            font-size: 30px;
            color: #00195f;
        }
        .container-c .cqiu {
            position: absolute;
            width: 278px;
            height: 278px;
            top: 50%;
            left: 50%;
            margin: -139px 0 0 -139px;
        }
        .dipan {
            position: absolute;
            width: 600px;
            height: 600px;
            top: 50%;
            left: 50%;
            z-index: 8;
            margin: -148px 0 0 -300px;
        }
        .dipan [class^=dipan-] {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-transform: rotateX(-80deg) rotateZ(45deg);
            -moz-transform: rotateX(-80deg) rotateZ(45deg);
            transform: rotateX(-80deg) rotateZ(45deg);
            bottom: 20px;
        }
        .dipan .dipan-1 {
            background: url(../../../assets/cloud/dipan-bg-1.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotateF 60s infinite linear;
            -moz-animation: dipanrotateF 60s infinite linear;
            -o-animation: dipanrotateF 60s infinite linear;
            animation: dipanrotateF 60s infinite linear;
        }
        .dipan .dipan-2 {
            background: url(../../../assets/cloud/dipan-bg-2.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotate 60s infinite linear;
            -moz-animation: dipanrotate 60s infinite linear;
            -o-animation: dipanrotate 60s infinite linear;
            animation: dipanrotate 60s infinite linear;
        }
        .dipan .dipan-3 {
            background: url(../../../assets/cloud/dipan-bg-3.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotateF 60s infinite linear;
            -moz-animation: dipanrotateF 60s infinite linear;
            -o-animation: dipanrotateF 60s infinite linear;
            animation: dipanrotateF 60s infinite linear;
        }
        .dipan .dipan-4 {
            background: url(../../../assets/cloud/dipan-bg-4.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotate 6s infinite linear;
            -moz-animation: dipanrotate 6s infinite linear;
            -o-animation: dipanrotate 6s infinite linear;
            animation: dipanrotate 6s infinite linear;
            bottom: 0px;
        }
        .dipan .dipan-5 {
            background: url(../../../assets/cloud/dipan-bg-4.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotate 6s 3s infinite linear;
            -moz-animation: dipanrotate 6s 3s infinite linear;
            -o-animation: dipanrotate 6s 3s infinite linear;
            animation: dipanrotate 6s 3s infinite linear;
            bottom: -10px;
        }
        .dipan .dipan-6 {
            background: url(../../../assets/cloud/dipan-bg-4-f.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotateF 3s infinite linear;
            -moz-animation: dipanrotateF 3s infinite linear;
            -o-animation: dipanrotateF 3s infinite linear;
            animation: dipanrotateF 3s infinite linear;
            bottom: -30px;
        }
        .dipan .dipan-7 {
            background: url(../../../assets/cloud/dipan-bg-4-f.png) no-repeat 50% 50%;
            -webkit-animation: dipanrotateF 3s 2s infinite linear;
            -moz-animation: dipanrotateF 3s 2s infinite linear;
            -o-animation: dipanrotateF 3s 2s infinite linear;
            animation: dipanrotateF 3s 2s infinite linear;
            bottom: -40px;
        }
        @-webkit-keyframes dipanrotate {
            0% {
                -webkit-transform: rotateX(-80deg) rotateZ(0deg);
                transform: rotateX(-80deg) rotateZ(0deg);
            }
            100% {
                -webkit-transform: rotateX(-80deg) rotateZ(360deg);
                transform: rotateX(-80deg) rotateZ(360deg);
            }
        }
        @-moz-keyframes dipanrotate {
            0% {
                -moz-transform: rotateX(-80deg) rotateZ(0deg);
                transform: rotateX(-80deg) rotateZ(0deg);
            }
            100% {
                -moz-transform: rotateX(-80deg) rotateZ(360deg);
                transform: rotateX(-80deg) rotateZ(360deg);
            }
        }
        @-o-keyframes dipanrotate {
            0% {
                transform: rotateX(-80deg) rotateZ(0deg);
            }
            100% {
                transform: rotateX(-80deg) rotateZ(360deg);
            }
        }
        @keyframes dipanrotate {
            0% {
                -webkit-transform: rotateX(-80deg) rotateZ(0deg);
                -moz-transform: rotateX(-80deg) rotateZ(0deg);
                transform: rotateX(-80deg) rotateZ(0deg);
            }
            100% {
                -webkit-transform: rotateX(-80deg) rotateZ(360deg);
                -moz-transform: rotateX(-80deg) rotateZ(360deg);
                transform: rotateX(-80deg) rotateZ(360deg);
            }
        }
        @-webkit-keyframes dipanrotateF {
            0% {
                -webkit-transform: rotateX(-80deg) rotateZ(360deg);
                transform: rotateX(-80deg) rotateZ(360deg);
            }
            100% {
                -webkit-transform: rotateX(-80deg) rotateZ(0deg);
                transform: rotateX(-80deg) rotateZ(0deg);
            }
        }
        @-moz-keyframes dipanrotateF {
            0% {
                -moz-transform: rotateX(-80deg) rotateZ(360deg);
                transform: rotateX(-80deg) rotateZ(360deg);
            }
            100% {
                -moz-transform: rotateX(-80deg) rotateZ(0deg);
                transform: rotateX(-80deg) rotateZ(0deg);
            }
        }
        @-o-keyframes dipanrotateF {
            0% {
                transform: rotateX(-80deg) rotateZ(360deg);
            }
            100% {
                transform: rotateX(-80deg) rotateZ(0deg);
            }
        }
        @keyframes dipanrotateF {
            0% {
                -webkit-transform: rotateX(-80deg) rotateZ(360deg);
                -moz-transform: rotateX(-80deg) rotateZ(360deg);
                transform: rotateX(-80deg) rotateZ(360deg);
            }
            100% {
                -webkit-transform: rotateX(-80deg) rotateZ(0deg);
                -moz-transform: rotateX(-80deg) rotateZ(0deg);
                transform: rotateX(-80deg) rotateZ(0deg);
            }
        }
        .container-c .tc-left {
            position: absolute;
            z-index: 10;
            text-align: left;
        }
        .tc-anim{
            box-sizing: border-box;
            font-size: 20px;
        }
        .container-c .tc-left-1 {
            width: 149px;
            height: 98px;
            background: url(../../../assets/cloud/tc-left-1.png) no-repeat 50% 50%;
            color: #ff9232;
            left: 53px;
            bottom: 249px;
            padding-top: 21px;
            padding-left: 20px;
        }
        .container-c .tc-left-2 {
            width: 162px;
            height: 70px;
            background: url(../../../assets/cloud/tc-left-2.png) no-repeat 50% 50%;
            color: #ff9232;
            bottom: 187px;
            left: 97px;
            padding-left: 18px;
            padding-top: 22px;
        }
        .container-c .tc-right {
            position: absolute;
            bottom: 0;
            text-align: right;
            z-index: 10;
        }
        .container-c .tc-right-1 {
            width: 149px;
            height: 98px;
            background: url(../../../assets/cloud/tc-right-1.png) no-repeat 50% 50%;
            color: #ff9232;
            bottom: 256px;
            right: 68px;
            padding-top: 21px;
            padding-right: 16px;
        }
        .container-c .tc-right-2 {
            width: 159px;
            height: 70px;
            background: url(../../../assets/cloud/tc-right-2.png) no-repeat 50% 50%;
            color: #ff9232;
            bottom: 192px;
            right: 100px;
            padding-right: 19px;
            padding-top: 23px;
        }
        .container-c .line-sx {
            width: 50%;
            position: absolute;
            height: 50%;
            margin-left: -25%;
            left: 50%;
            z-index: 1;
            top: 0;
            -webkit-filter: hue-rotate(200deg);
            filter: hue-rotate(200deg);
        }
        .line-sx .line-fs {
            width: 14px;
            height: 100%;
            background-image: url(../../../assets/cloud/line-fs.png);
            background-repeat: no-repeat;
            background-position: 50% 150%;
            position: absolute;
            z-index: -1;
            -webkit-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
            -moz-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
            -o-animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
            animation: fs 3s cubic-bezier(1, 0, 0.6, 0.6) infinite;
        }
        .line-sx > div:nth-child(2) {
            height: 90%;
            -webkit-animation-duration: 2s;
            -moz-animation-duration: 2s;
            -o-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-delay: 1.5s;
            -moz-animation-delay: 1.5s;
            -o-animation-delay: 1.5s;
            animation-delay: 1.5s;
            bottom: 0;
            left: 51px;
        }
        .line-sx > div:nth-child(3) {
            height: 100%;
            -webkit-animation-duration: 3s;
            -moz-animation-duration: 3s;
            -o-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-delay: 0s;
            -moz-animation-delay: 0s;
            -o-animation-delay: 0s;
            animation-delay: 0s;
            bottom: 32px;
            left: 89px;
        }
        .line-sx > div:nth-child(4) {
            height: 100%;
            -webkit-animation-duration: 2.5s;
            -moz-animation-duration: 2.5s;
            -o-animation-duration: 2.5s;
            animation-duration: 2.5s;
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            -o-animation-delay: 1s;
            animation-delay: 1s;
            bottom: 3px;
            left: 179px;
            -webkit-filter: hue-rotate(180deg);
            filter: hue-rotate(180deg);
        }
        .line-sx > div:nth-child(5) {
            height: 90%;
            -webkit-animation-duration: 2s;
            -moz-animation-duration: 2s;
            -o-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-delay: 2s;
            -moz-animation-delay: 2s;
            -o-animation-delay: 2s;
            animation-delay: 2s;
            bottom: 42px;
            left: 229px;
        }
        .line-sx > div:nth-child(6) {
            height: 100%;
            -webkit-animation-duration: 2.5s;
            -moz-animation-duration: 2.5s;
            -o-animation-duration: 2.5s;
            animation-duration: 2.5s;
            -webkit-animation-delay: 0.5s;
            -moz-animation-delay: 0.5s;
            -o-animation-delay: 0.5s;
            animation-delay: 0.5s;
            bottom: 11px;
            right: 48px;
        }
        .line-sx > div:nth-child(7) {
            height: 90%;
            -webkit-animation-duration: 3s;
            -moz-animation-duration: 3s;
            -o-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-delay: 2.5s;
            -moz-animation-delay: 2.5s;
            -o-animation-delay: 2.5s;
            animation-delay: 2.5s;
            bottom: -22px;
            right: 174px;
            -webkit-filter: hue-rotate(180deg);
            filter: hue-rotate(180deg);
        }
        .line-sx > div:nth-child(8) {
            height: 90%;
            -webkit-animation-duration: 3s;
            -moz-animation-duration: 3s;
            -o-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-delay: 1.5s;
            -moz-animation-delay: 1.5s;
            -o-animation-delay: 1.5s;
            animation-delay: 1.5s;
            bottom: -22px;
            right: 100px;
        }
        .line-sx > div:nth-child(9) {
            height: 100%;
            -webkit-animation-duration: 2.5s;
            -moz-animation-duration: 2.5s;
            -o-animation-duration: 2.5s;
            animation-duration: 2.5s;
            -webkit-animation-delay: 2s;
            -moz-animation-delay: 2s;
            -o-animation-delay: 2s;
            animation-delay: 2s;
            bottom: -10px;
            right: 220px;
        }
        .line-sx > div:nth-child(10) {
            height: 95%;
            -webkit-animation-duration: 2s;
            -moz-animation-duration: 2s;
            -o-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            -o-animation-delay: 1s;
            animation-delay: 1s;
            bottom: -41px;
            right: 182px;
        }
        @-webkit-keyframes fs {
            0% {
                background-position: 50% 150%;
            }
            50% {
                background-position: 50% -132%;
            }
            100% {
                background-position: 50% -264%;
                opacity: 0;
            }
        }
        @-moz-keyframes fs {
            0% {
                background-position: 50% 150%;
            }
            50% {
                background-position: 50% -132%;
            }
            100% {
                background-position: 50% -264%;
                opacity: 0;
            }
        }
        @-o-keyframes fs {
            0% {
                background-position: 50% 150%;
            }
            50% {
                background-position: 50% -132%;
            }
            100% {
                background-position: 50% -264%;
                opacity: 0;
            }
        }
        @keyframes fs {
            0% {
                background-position: 50% 150%;
            }
            50% {
                background-position: 50% -132%;
            }
            100% {
                background-position: 50% -264%;
                opacity: 0;
            }
        }
        .filter {
            -webkit-filter: contrast(75%) brightness(60%);
            filter: contrast(75%) brightness(60%);
        }
        .container-c .line {
            position: absolute;
            width: 670px;
            left: 50%;
            margin-left: -335px;
            text-align: center;
            top: 59px;
        }
        .container-c .line .line-anim {
            fill: none;
            stroke-width: 3px;
            stroke-miterlimit: 10;
            stroke-dashoffset: 2000;
            /* 线段的偏移 */
            -webkit-animation-name: line-linear;
            -moz-animation-name: line-linear;
            -o-animation-name: line-linear;
            animation-name: line-linear;
            -webkit-animation-duration: 60s;
            -moz-animation-duration: 60s;
            -o-animation-duration: 60s;
            animation-duration: 60s;
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            -o-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
        }
        @-webkit-keyframes line-linear {
            to {
                stroke-dashoffset: 0;
            }
        }
        @-moz-keyframes line-linear {
            to {
                stroke-dashoffset: 0;
            }
        }
        @-o-keyframes line-linear {
            to {
                stroke-dashoffset: 0;
            }
        }
        @keyframes line-linear {
            to {
                stroke-dashoffset: 0;
            }
        }
        @-webkit-keyframes line-linear-1 {
            to {
                stroke-dashoffset: 2000;
            }
        }
        @-moz-keyframes line-linear-1 {
            to {
                stroke-dashoffset: 2000;
            }
        }
        @-o-keyframes line-linear-1 {
            to {
                stroke-dashoffset: 2000;
            }
        }
        @keyframes line-linear-1 {
            to {
                stroke-dashoffset: 2000;
            }
        }
        .container-c .line .line-anim-1 {
            stroke-dashoffset: 0;
            /* 线段的偏移 */
            -webkit-animation-name: line-linear-1;
            -moz-animation-name: line-linear-1;
            -o-animation-name: line-linear-1;
            animation-name: line-linear-1;
        }
        .container-c .line [class^=line-d-] {
            width: 46px;
            height: 46px;
            background: url(../../../assets/cloud/line-d.png) no-repeat 50% 50%;
            offset-distance: 0%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
        }
        .container-c .line .line-d-1 {
            -webkit-animation: line 3s linear forwards;
            -moz-animation: line 3s linear forwards;
            -o-animation: line 3s linear forwards;
            animation: line 3s linear forwards;
            offset-path: path("M263.713,360.092c-16.944-16.828-86.188-94.197-84.129-228.802");
        }
        .container-c .line .line-d-2 {
            -webkit-animation: line 3s linear forwards;
            -moz-animation: line 3s linear forwards;
            -o-animation: line 3s linear forwards;
            animation: line 3s linear forwards;
            -webkit-animation-delay: 0.5s;
            -moz-animation-delay: 0.5s;
            -o-animation-delay: 0.5s;
            animation-delay: 0.5s;
            offset-path: path("M195.381,332.049c-23.122-13.617-125.904-85.271-88.132-263.139");
        }
        .container-c .line .line-d-3 {
            -webkit-animation: lineF 3s linear forwards;
            -moz-animation: lineF 3s linear forwards;
            -o-animation: lineF 3s linear forwards;
            animation: lineF 3s linear forwards;
            offset-path: path("M1.602,170.091C58.489,339.832,184.163,367.76,206.939,372.799");
        }
        .container-c .line .line-d-4 {
            -webkit-animation: line 3s linear forwards;
            -moz-animation: line 3s linear forwards;
            -o-animation: line 3s linear forwards;
            animation: line 3s linear forwards;
            -webkit-animation-delay: 0.5s;
            -moz-animation-delay: 0.5s;
            -o-animation-delay: 0.5s;
            animation-delay: 0.5s;
            offset-path: path("M282.824,345.443c-12.591-22.781-65.813-131.172-34.45-285.345");
        }
        .container-c .line .line-d-5 {
            -webkit-animation: line 3s linear forwards;
            -moz-animation: line 3s linear forwards;
            -o-animation: line 3s linear forwards;
            animation: line 3s linear forwards;
            offset-path: path("M456.115,321.518c23.807-20.258,142.041-132.769,36.397-282.367");
        }
        .container-c .line .line-d-6 {
            -webkit-animation: line 3s linear forwards;
            -moz-animation: line 3s linear forwards;
            -o-animation: line 3s linear forwards;
            animation: line 3s linear forwards;
            -webkit-animation-delay: 0.5s;
            -moz-animation-delay: 0.5s;
            -o-animation-delay: 0.5s;
            animation-delay: 0.5s;
            offset-path: path("M430.25,356.545c23.005-4.92,118.806-32.508,161.039-161.731");
        }
        .container-c .line .line-d-7 {
            -webkit-animation: lineF 3s linear forwards;
            -moz-animation: lineF 3s linear forwards;
            -o-animation: lineF 3s linear forwards;
            animation: lineF 3s linear forwards;
            offset-path: path("M669.81,138.042c-63.754,207.86-205.795,228.686-229.947,232.467");
        }
        .container-c .line .line-d-8 {
            -webkit-animation: line 3s linear forwards;
            -moz-animation: line 3s linear forwards;
            -o-animation: line 3s linear forwards;
            animation: line 3s linear forwards;
            -webkit-animation-delay: 0.5s;
            -moz-animation-delay: 0.5s;
            -o-animation-delay: 0.5s;
            animation-delay: 0.5s;
            offset-path: path("M416.397,335.713c18.084-17.281,92.481-98.434,40.521-220.563");
        }
        @-webkit-keyframes line {
            0% {
                offset-distance: 0%;
                opacity: 1;
            }
            100% {
                offset-distance: 100%;
                opacity: 1;
            }
        }
        @-moz-keyframes line {
            0% {
                offset-distance: 0%;
                opacity: 1;
            }
            100% {
                offset-distance: 100%;
                opacity: 1;
            }
        }
        @-o-keyframes line {
            0% {
                offset-distance: 0%;
                opacity: 1;
            }
            100% {
                offset-distance: 100%;
                opacity: 1;
            }
        }
        @keyframes line {
            0% {
                offset-distance: 0%;
                opacity: 1;
            }
            100% {
                offset-distance: 100%;
                opacity: 1;
            }
        }
        @-webkit-keyframes lineF {
            0% {
                offset-distance: 100%;
                opacity: 1;
            }
            100% {
                offset-distance: 0%;
                opacity: 1;
            }
        }
        @-moz-keyframes lineF {
            0% {
                offset-distance: 100%;
                opacity: 1;
            }
            100% {
                offset-distance: 0%;
                opacity: 1;
            }
        }
        @-o-keyframes lineF {
            0% {
                offset-distance: 100%;
                opacity: 1;
            }
            100% {
                offset-distance: 0%;
                opacity: 1;
            }
        }
        @keyframes lineF {
            0% {
                offset-distance: 100%;
                opacity: 1;
            }
            100% {
                offset-distance: 0%;
                opacity: 1;
            }
        }
        .container-c .line .line-text-c {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        .container-c .line .line-text-c > div {
            position: absolute;
            font-size: 18px;
            color: #00bff3;
            display: inline-block;
            white-space: nowrap;
            text-align: left;
        }
        .container-c .line .line-text-c > div > span {
            display: block;
            font-size: 24px;
            color: #00bff3;
            margin-bottom: 5px;
        }
        .container-c .line .line-text-c > div > span:nth-child(1) {
            font-size: 16px;
        }
        .container-c .line .line-text-c > div > span > span {
            font-size: 14px;
        }
        .container-c .line .line-text-c-1 {
            top: 27%;
            left: -54px;
        }
        .container-c .line .line-text-c-2 {
            top: 2%;
            left: 77px;
        }
        .container-c .line .line-text-c-3 {
            top: -1%;
            left: 196px;
        }
        .container-c .line .line-text-c-4 {
            top: -5%;
            left: 461px;
        }
        .container-c .line .line-text-c-5 {
            top: 61px;
            left: 635px;
        }
        .container-c .text>span:nth-child(2) {
            font-size: 30px;
            color: #00195f;
        }
        .odometer{
            letter-spacing: 4px;
        }
        .odometer.odometer-auto-theme, .odometer.odometer-theme-digital {
            display: inline-block;
            vertical-align: middle;
            *vertical-align: auto;
            *zoom: 1;
            *display: inline;
            position: relative;
        }

        .odometer.odometer-auto-theme .odometer-digit, .odometer.odometer-theme-digital .odometer-digit {
            display: inline-block;
            vertical-align: middle;
            *vertical-align: auto;
            *zoom: 1;
            *display: inline;
            position: relative;
        }

        .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer, .odometer.odometer-theme-digital .odometer-digit .odometer-digit-spacer {
            display: inline-block;
            vertical-align: middle;
            *vertical-align: auto;
            *zoom: 1;
            *display: inline;
            visibility: hidden;
        }

        .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner, .odometer.odometer-theme-digital .odometer-digit .odometer-digit-inner {
            text-align: left;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
        }

        .odometer.odometer-auto-theme .odometer-digit .odometer-value, .odometer.odometer-theme-digital .odometer-digit .odometer-value {
            display: block;
            -webkit-transform: translateZ(0);
        }

        .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value, .odometer.odometer-theme-digital .odometer-digit .odometer-value.odometer-last-value {
            position: absolute;
        }

        .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-up .odometer-ribbon-inner {
            -webkit-transition: -webkit-transform 2s;
            -moz-transition: -moz-transform 2s;
            -o-transition: -o-transform 2s;
            transition: -webkit-transform 2s;
            -moz-transition: transform 2s, -moz-transform 2s;
            transition: transform 2s;
            transition: transform 2s, -webkit-transform 2s, -moz-transform 2s, -o-transform 2s;
        }

        .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
        }

        .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-down .odometer-ribbon-inner {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            -o-transform: translateY(-100%);
            transform: translateY(-100%);
        }

        .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
            -webkit-transition: -webkit-transform 2s;
            -moz-transition: -moz-transform 2s;
            -o-transition: -o-transform 2s;
            transition: -webkit-transform 2s;
            -moz-transition: transform 2s, -moz-transform 2s;
            transition: transform 2s;
            transition: transform 2s, -webkit-transform 2s, -moz-transform 2s, -o-transform 2s;
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
        }

        .odometer.odometer-auto-theme, .odometer.odometer-theme-digital {
            padding: 0 0.2em;
            line-height: 1.1em;
            color: #0253a4;
        }

        .odometer.odometer-auto-theme .odometer-digit + .odometer-digit, .odometer.odometer-theme-digital .odometer-digit + .odometer-digit {
            margin-left: 0.1em;
        }
    }
</style>
