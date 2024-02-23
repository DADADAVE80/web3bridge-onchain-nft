import hre from "hardhat";

const main = async () => {
    // Get 'OnChainNFT' contract
    const NFTContractFactory = await hre.ethers.getContractFactory('OnChainNFT');

    // Deploy contract
    const NFTContract = await NFTContractFactory.deploy();
    console.log('✅ Contract deployed to:', NFTContract.target);

    // SVG image that you want to mint
    // const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1024' height='1024'>
    //   <defs><clipPath id='a'><path d='M0 0h1024v1024H0z'/></clipPath></defs>
    //   <g clip-path='url(#a)'>
    //     <path d='M0 0h1024v1024H0z'/>
    //     <path fill='#fff' d='M0 241h1024v20H0zM0 502h1024v20H0zM0 763h1024v20H0z'/>
    //     <path fill='#fff' d='M241 0h20v1024h-20z'/>
    //   </g>
    // </svg>`;

    const imageURI = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGNsYXNzPSJpY29uIiAgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yNDkuNSA3MDAuNmMxNC41IDEzNS41IDEzMi42IDI0MS4xIDI3NiAyNDEuMXMyNjEuNS0xMDUuNiAyNzYtMjQxLjFoLTU1MnoiIGZpbGw9IiNGOUMwQzAiIC8+PHBhdGggZD0iTTUxMiA5NTcuM2MtNzkuNiAwLTE1NC41LTI4LjctMjEwLjgtODAuOC01Ni41LTUyLjItODcuNi0xMjEuNy04Ny42LTE5NS43IDAtNTkuNyAyMC4yLTExNi41IDU4LjQtMTY0LjMgMzYuMi00NS4zIDg1LjQtNzguOCAxNDIuNi05Ny4xVjIwNi4xaC00Ni4xYy0xMS4yIDAtMjAuNC05LjEtMjAuNC0yMC40di0xNy4xYzAtMTEuMiA5LjEtMjAuNCAyMC40LTIwLjRoMjg3LjJjMTEuMiAwIDIwLjQgOS4xIDIwLjQgMjAuNHYxNy4xYzAgMTEuMi05LjEgMjAuNC0yMC40IDIwLjRoLTQ2LjF2MjEzLjRjNTcuMSAxOC4zIDEwNi4zIDUxLjggMTQyLjYgOTcuMSAzOC4yIDQ3LjggNTguNCAxMDQuNiA1OC40IDE2NC4zIDAgNzQtMzEuMSAxNDMuNS04Ny42IDE5NS43LTU2LjUgNTItMTMxLjQgODAuNy0yMTEgODAuN3pNMzY4LjQgMTYzLjJjLTMgMC01LjQgMi40LTUuNCA1LjR2MTcuMWMwIDMgMi40IDUuNCA1LjQgNS40aDYxLjF2MjM5LjVsLTUuMyAxLjZjLTU2LjUgMTctMTA1LjEgNDkuNC0xNDAuNSA5My43LTM2IDQ1LjEtNTUuMSA5OC43LTU1LjEgMTU0LjkgMCA2OS43IDI5LjQgMTM1LjMgODIuOCAxODQuN0MzNjUgOTE1IDQzNi4yIDk0Mi4zIDUxMiA5NDIuM3MxNDcuMS0yNy4zIDIwMC42LTc2LjhjNTMuNC00OS40IDgyLjgtMTE1IDgyLjgtMTg0LjcgMC01Ni4yLTE5LTEwOS44LTU1LjEtMTU0LjktMzUuNC00NC40LTg0LTc2LjgtMTQwLjUtOTMuN2wtNS4zLTEuNlYxOTEuMWg2MS4xYzMgMCA1LjQtMi40IDUuNC01LjR2LTE3LjFjMC0zLTIuNC01LjQtNS40LTUuNEgzNjguNHoiIGZpbGw9IiM5OTk5OTkiIC8+PHBhdGggZD0iTTIyMC43IDY3Ni44aDU4MS45djhIMjIwLjd6TTQxMyAxOTAuOGgzOS42djhINDEzek00OTUuNSAxOTAuOGgxMDYuMXY4SDQ5NS41eiIgZmlsbD0iIzk5OTk5OSIgLz48cGF0aCBkPSJNNDUyLjcgNjQ1LjdjLTE0IDAtMjUuNC0xMS40LTI1LjQtMjUuNHMxMS40LTI1LjQgMjUuNC0yNS40IDI1LjQgMTEuNCAyNS40IDI1LjQtMTEuNCAyNS40LTI1LjQgMjUuNHogbTAtNDIuOWMtOS42IDAtMTcuNCA3LjgtMTcuNCAxNy40czcuOCAxNy40IDE3LjQgMTcuNCAxNy40LTcuOCAxNy40LTE3LjQtNy44LTE3LjQtMTcuNC0xNy40ek01NzEuNiA1NTYuOGMtMjcuNiAwLTUwLjEtMjIuNS01MC4xLTUwLjFzMjIuNS01MC4xIDUwLjEtNTAuMSA1MC4xIDIyLjUgNTAuMSA1MC4xLTIyLjUgNTAuMS01MC4xIDUwLjF6IG0wLTkyLjJjLTIzLjIgMC00Mi4xIDE4LjktNDIuMSA0Mi4xczE4LjkgNDIuMSA0Mi4xIDQyLjEgNDIuMS0xOC45IDQyLjEtNDIuMS0xOC45LTQyLjEtNDIuMS00Mi4xek00OTEuMiAzMTYuN2MtMTcgMC0zMC44LTEzLjgtMzAuOC0zMC44czEzLjgtMzAuOCAzMC44LTMwLjggMzAuOCAxMy44IDMwLjggMzAuOC0xMy44IDMwLjgtMzAuOCAzMC44eiBtMC01My42Yy0xMi42IDAtMjIuOCAxMC4yLTIyLjggMjIuOHMxMC4yIDIyLjggMjIuOCAyMi44YzEyLjYgMCAyMi44LTEwLjIgMjIuOC0yMi44cy0xMC4yLTIyLjgtMjIuOC0yMi44ek01NDMuMiAxMTMuMWMtMTIgMC0yMS43LTkuNy0yMS43LTIxLjdzOS43LTIxLjcgMjEuNy0yMS43IDIxLjcgOS43IDIxLjcgMjEuNy05LjcgMjEuNy0yMS43IDIxLjd6IG0wLTM1LjRjLTcuNSAwLTEzLjcgNi4xLTEzLjcgMTMuN3M2LjEgMTMuNyAxMy43IDEzLjcgMTMuNy02LjEgMTMuNy0xMy43LTYuMS0xMy43LTEzLjctMTMuN3oiIGZpbGw9IiNDRTAyMDIiIC8+PC9zdmc+";

    // Call the mint function from our contract
    const txn = await NFTContract.mint(imageURI);
    const txnReceipt = await txn.wait();

    // Get the token id of the minted NFT (using our event)
    const event = txnReceipt.events?.find((event) => event.event === 'Minted');
    const tokenId = event?.args['tokenId'];

    console.log(
        '🎨 Your minted NFT:',
        `https://testnets.opensea.io/assets/${NFTContract.target}/${tokenId}`
    );
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();