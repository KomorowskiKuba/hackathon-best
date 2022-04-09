<script>
    import { page } from '$app/stores';

    let id = 'www.sensortown.com' + $page.url.pathname;
    let is_copied = false;

    let changeIsCopied = () => is_copied = true;

    export function clickToCopy(node, target) {
	async function copyText() {
		let text = target 
		  ? document.querySelector(target).innerText 
		  : node.innerText;
		
		try {
			await navigator.clipboard.writeText(text);
			
			node.dispatchEvent(
        new CustomEvent('copysuccess', {
					bubbles: true
				})
      );
		} catch(error) {
			node.dispatchEvent(
        new CustomEvent('copyerror', {
					bubbles: true,
					detail: error
				})
      );
		}
	}
	
	node.addEventListener('click', copyText);
	
	return {
		destroy() {
			node.removeEventListener('click', copyText);
		}
	}
}
</script>

<header>
	<h1>Thank you!</h1>
    <h2> Your API link: </h2>
    <h3>{id}</h3>
        <button use:clickToCopy={"h2"} on:click="{changeIsCopied}"> 
            {#if is_copied === false}
                Copy
            {:else}
                Copied!
            {/if}
        </button>
		<a href="/list"><em class="small">Go to list</em></a>
</header>