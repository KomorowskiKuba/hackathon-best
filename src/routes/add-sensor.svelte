<script>
    import SensorTypeTile from "$lib/components/SensorTypeTile.svelte";
    import IconWithText from "$lib/components/IconWithText.svelte";
    import { goto } from '$app/navigation';

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

    function hash(x) {
        var hash = 0, i, chr;
        if (x.length === 0) return hash;
        for (i = 0; i < x.length; i++) {
            chr   = x.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash;
    };

    const handleSubmit = () => {
        let h = hash(type);
        goto("/sensor-api/" + h);
  };
</script>

<header>
    {#if type === ""}
    <h2> Select your sensor's type </h2>
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
        <form style="text-align: center;" on:submit|preventDefault="{handleSubmit}">
            <header style="padding-bottom: 0rem; padding-top: 0;">
                <h2>{type}</h2>
            </header>
    
            <IconWithText name="looks_one">
                &nbsp;
                <input type="text" placeholder="Sensor's id" size="28" />
            </IconWithText>
            <IconWithText name="location_on">
                &nbsp;
                <input type="text" placeholder="Address" size="28" />
            </IconWithText>
            <br />
            <button type="submit">Continue</button>
        </form>
    {/if}
</header>

<style>
    form {
        display: inline-block;
    }
    .row {
        display: flex;
    }

    .column {
        flex: 100%;
        padding: 5px;
    }
</style>