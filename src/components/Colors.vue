<template>

    <div class="col-md-4 p-2">
        {{ color }}
        <div :class="'color-'+[color]" class="p-1">
            <p><span class="float-right" >#FFEBEE</span></p>
        </div>
        <div :class="'color-'+[color+'-10']" class="p-1">
            <p>10 <span class="float-right" >#FFEBEE</span></p>
        </div>
        <div :class="'color-'+[color+'-50']" class="p-1">
            <p>50 <span class="float-right" >#FFEBEE</span></p>
        </div>
        <div :class="'color-'+[color+'-100']" class="p-1">
            <p>100 <span>#FFCDD2</span></p>
        </div>
        <div :class="'color-'+[color+'-200']" class="p-1">
            <p>200 <span>#EF9A9A</span></p>
        </div>
        <div :class="'color-'+[color+'-300']" class="p-1">
            <p>300 <span>#E57373</span></p>
        </div>
        <div :class="'color-'+[color+'-400']" class="p-1">
            <p>400 <span>#EF5350</span></p>
        </div>
        <div :class="'color-'+[color+'-500']" class="p-1">
            <p>500 <span>#F44336</span></p>
        </div>
        <div :class="'color-'+[color+'-600']" class="p-1">
            <p>600 <span>#E53935</span></p>
        </div>
        <div :class="'color-'+[color+'-700']" class="p-1">
            <p>700 <span>#D32F2F</span></p>
        </div>
        <div :class="'color-'+[color+'-800']" class="p-1">
            <p>800 <span>#C62828</span></p>
        </div>
        <div :class="'color-'+[color+'-900']" class="p-1">
            <p>900 <span>#B71C1C</span></p>
        </div>
        <div :class="'color-'+[color+'-a100']" class="p-1">
            <p>A100 <span>#FF8A80</span></p>
        </div>
        <div :class="'color-'+[color+'-a200']" class="p-1">
            <p>A200 <span>#FF5252</span></p>
        </div>
        <div :class="'color-'+[color+'-a400']" class="p-1">
            <p>A400 <span>#FF1744</span></p>
        </div>
        <div :class="'color-'+[color+'-a700']" class="p-1">
            <p>A700 <span>#D50000</span></p>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Colors',
    props: {
        color: String
    },
    components: {
    },
    methods:{
        rgbToHex: function(value) {
            const replace = value.replace(new RegExp('[^0-9\\,]','g'),'');
            const splited = replace.split(',');
        
            const r = splited[0];
            const g = splited[1];
            const b = splited[2];
            
            return "#" + ((1 << 24) + ((+r) << 16) + ((+g) << 8) + (+b)).toString(16).slice(1);
        }
    },
    created(){
    },
    mounted() {
        const elements = this.$el;
        const children = elements.children;
        for (const e of children) {
            const style = window.getComputedStyle(e,"");
            const hex = this.rgbToHex(style.backgroundColor);
            if(hex==='#000000'){
                e.innerHTML = '';
            }else{
                const span = e.querySelector('span');
                console.log('span',span);
                span.innerHTML = hex;
            }
        }
    },
}
</script>