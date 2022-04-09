<script>
    import SensorTypeTile from "$lib/components/SensorTypeTile.svelte";

    let types = [
        "Temperature",
        "Air quality",
        "Noise",
        "Humidity",
        "Rain meter",
        "UV radiation",
        "Wind speed",
        "Soil moisture"
    ]

    let type = "";
</script>

<header>
    <h2> Select your sensor's type </h2>

    {#if type === ""}
    <div class="row">
        <div class="column">
            <SensorTypeTile icon_name={"thermostat"} text={types[0]} fun={types[0]} bind:type={type}/>
        </div>
        <div class="column">
            <div class="column">
                <SensorTypeTile icon_name={"air"} text={types[1]} fun={types[1]} bind:type={type}/>
            </div>
        </div>
        <div class="column">
            <div class="column">
                <SensorTypeTile icon_name={"volume_up"} text={types[2]} fun={types[2]} bind:type={type}/>
            </div>
        </div>
        <div class="column">
            <div class="column">
                <SensorTypeTile icon_name={"water_drop"} text={types[3]} fun={types[3]} bind:type={type}/>
            </div>
        </div>
    </div>
    <div class="row"><div class="column">
        <div class="column">
            <SensorTypeTile icon_name={"opacity"} text={types[4]} fun={types[4]} bind:type={type}/>
        </div>
    </div>
    <div class="column">
        <div class="column">
            <SensorTypeTile icon_name={"light_mode"} text={types[5]} fun={types[5]} bind:type={type}/>
        </div>
    </div>
    <div class="column">
        <div class="column">
            <SensorTypeTile icon_name={"wind_power"} text={types[6]} fun={types[6]} bind:type={type}/>
        </div>
    </div>
    <div class="column">
        <div class="column">
            <SensorTypeTile icon_name={"terrain"} text={types[7]} fun={types[7]} bind:type={type}/>
        </div>
    </div></div>
    {:else}
        <p>{type}</p>
    {/if}
</header>

<style>
    .row {
        display: flex;
    }

    .column {
        flex: 100%;
        padding: 5px;
    }
</style>