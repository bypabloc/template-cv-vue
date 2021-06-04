<template>
    <!--
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                    <div class="col-6" v-for="(value, index) in hobbies" :key="index">
                        {{ value.text }}
                        <div class="progress" style="height: 3px;">
                            <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" 
                                :style="{
                                    width: `${value.percentage}%`
                                }"
                            >
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    -->
    <div class="">
        <div :class="' theme-'+[theme]+'-800 p-2'">
            <div :class="'row'">
                <h5 class="">
                    <Title :text="title"/>
                </h5>
                
                <div :class="'progress theme-'+[theme]+'-800'" :data-percentage="value.percentage" v-for="(value, index) in hobbies" :key="index">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                        <div>
                            {{ value.text }}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>

import Title from './Title'

export default {
    name: 'hobbies',
    data() {
        return {
            theme: String,
            title: "LANGUAGES",
            hobbies: [
                {
                    text: 'Spanish',
                    percentage: 100,
                },
                {
                    text: 'English',
                    percentage: 60,
                },
            ],
            
        }
    },
    props: {
    },
    components: {
        Title,
    },
    methods:{
        test: () => {
            return "#";
        }
    },
    created(){
    },
    mounted() {
        this.test();
    },
}
</script>


// <style lang="scss" scoped>

// $borderWidth: 5px;
// $animationTime: .5s;
// $border-color-default: #efefef;
// $border-color-fill: #000000;
// $size: 80px;
// $howManySteps: 100; //this needs to be even. 

// .progress {
//   width: $size;
//   height: $size;
//   line-height: $size;
//   background: none;
//   margin: 0 auto;
//   box-shadow: none;
//   position: relative;
//   &:after {
//     content: "";
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     border: $borderWidth solid $border-color-default;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
//   > span {
//     width: 50%;
//     height: 100%;
//     overflow: hidden;
//     position: absolute;
//     top: 0;
//     z-index: 1;
//   }
//   .progress-left {
//     left: 0;
//   }
//   .progress-bar {
//     width: 100%;
//     height: 100%;
//     background: none;
//     border-width: $borderWidth;
//     border-style: solid;
//     position: absolute;
//     top: 0;
//     border-color: $border-color-fill;
//   }
//   .progress-left .progress-bar {
//     left: 100%;
//     border-top-right-radius: ($size/2);;
//     border-bottom-right-radius: ($size/2);;
//     border-left: 0;
//     -webkit-transform-origin: center left;
//     transform-origin: center left;
//     //animation: loading-2 1.5s linear forwards 1.8s;
//   }
//   .progress-right {
//     right: 0;
//     .progress-bar {
//       left: -100%;
//       border-top-left-radius: ($size/2);;
//       border-bottom-left-radius: ($size/2);;
//       border-right: 0;
//       -webkit-transform-origin: center right;
//       transform-origin: center right;
//       //animation: loading-1 1.8s linear forwards;
//     }
//   }
//   .progress-value {
//     display: flex;
//     border-radius: 50%;
//     font-size: 1rem;
//     text-align: center;
//     line-height: 20px;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     width: 100%;
//     font-weight: 300;
//     div {
//       //margin-top: 10px;
//     }
//     span {
//       font-size: 12px;
//       text-transform: uppercase;
//     }
//   }
// }

// @for $i from 1 through $howManySteps {
// 	$stepName: ($i*(100 / $howManySteps));

// 	//animation only the left side if below 50%
// 	@if $i <= ($howManySteps/2) { 
// 		.progress[data-percentage="#{$stepName}"] {
// 			.progress-right .progress-bar {
// 				animation: loading-#{$i} $animationTime linear forwards;
// 			}
// 			.progress-left .progress-bar {animation: 0;}
// 		}
// 	}
// 	//animation only the right side if above 50%
// 	@if $i > ($howManySteps/2)  {  
// 		.progress[data-percentage="#{$stepName}"] {
// 			.progress-right .progress-bar {
// 				animation: loading-#{($howManySteps/2)} $animationTime linear forwards; //set the animation to longest animation
// 			}
// 			.progress-left .progress-bar {
//       animation: loading-#{$i - ($howManySteps/2)} $animationTime linear forwards $animationTime;
//     }
// 		}
// 	}
// }

// @for $i from 1 through ($howManySteps/2) { 
// 	$degrees: (180/($howManySteps/2));
// 	$degrees: ($degrees*$i);
// 	@keyframes loading-#{$i}{
//     0%{
//         -webkit-transform: rotate(0deg);
//         transform: rotate(0deg);
//     }
//     100%{
//         -webkit-transform: rotate($degrees);
// 			transform: rotate(#{$degrees}deg);
//     }
// 	}
// }
// </style>