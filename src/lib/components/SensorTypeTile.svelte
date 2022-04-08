<script>
    export let icon_name = "";
    export let path = "";
    export let text = "";
    export let fun = "";
    export let type = "";

    function testIsChanged() {
        type = fun;
    }
</script>

<a href={path} on:click={testIsChanged}>
    <span class="material-icons" style="font-size: 110px;">{icon_name}</span>
</a>
<p>
    <b>{text}</b>
</p>