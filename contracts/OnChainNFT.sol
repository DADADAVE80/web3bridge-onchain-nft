// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/*
    A library that provides a function for encoding some bytes in base64
    Source: https://github.com/zlayine/epic-game-buildspace/blob/master/contracts/libraries/Base64.sol
*/
import {Base64} from "./Base64.sol";

contract OnChainNFT is ERC721URIStorage {
    using Strings for uint256;

    mapping(uint256 => uint256) public tokenIdToLevels;

    constructor() ERC721("OnChainNFT", "OCN") {}

    function simplifiedFormatTokenURI(string memory imageURI)
    public
    pure
    returns (string memory)
    {
        string memory baseURL = "data:application/json;base64,";
        string memory json = string(
            abi.encodePacked(
                '{"name": "ON-CHAIN-NFT", "description": "A simple SVG based on-chain NFT", "image":"',
                imageURI,
                '"}'
            )
        );
        string memory jsonBase64Encoded = Base64.encode(bytes(json));
        return string(abi.encodePacked(baseURL, jsonBase64Encoded));
    }

    function mint(string memory imageURI) public {
        string memory tokenURI = simplifiedFormatTokenURI(imageURI);

        uint256 newItemId = 0;

        /* Mint the token id and set the token URI */
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        newItemId = newItemId + 1;
    }
}
