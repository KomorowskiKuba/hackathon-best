<script>
    export let name = '';
    export let type = '';
    export let img_path = '';
    export let path = '';
</script>

<li>
    <div style="display:flex; flex-direction: row; justify-content: flex-start; align-items: center; text-align: left;">
        <a href={path}>
            <img src={img_path} alt="sensor-type" height="25%" width="25%"/>
        </a>
        <p>
            Sensor: {name}
        </p>
        <p>
            Type: {type}
        </p>
    </div>
</li>

<style>
    img {
        border-radius: 50%;
    }
    
    li {
        position: relative;
        display: block;
        padding: .4em .4em .4em 2em;
        *padding: .4em;
        margin: .5em 0;
        background: black;
        box-shadow: 5px 2px 20px #E900FF;
        color: white;
        border-radius: 15px;
        transition: all .3s ease-out;
  }
</style>