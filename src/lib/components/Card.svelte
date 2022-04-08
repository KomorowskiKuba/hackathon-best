<script>
    export let text = '';
    export let img_path = '';
    export let path = '';
</script>

<a href={path}>
    <div class="card" style="display: inline-block;">
        <img src="{img_path}" alt="Avatar" width="100%">
        <div class="container">
        <h3>{text}</h3>
        </div>
    </div> 
</a>

<style>
    h3 {
        color: white
    }

    .card {
        background-color: #E900FF;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }
</style>