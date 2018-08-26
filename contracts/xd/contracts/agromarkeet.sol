pragma solidity ^0.4.24;

contract AgroMarkeet {
    //Defino variables
    bool public isBidStarted;
    bool public isBidFinished;
    address marketPlace;
    uint price = 1 finney;
    mapping (address => batch) public batches;
    mapping (address => uint) public agroTokens;
    
    struct batch {
        string name;
        uint kilograms;
        uint price;
        address finalOwner;
    }
    
    constructor(){
        marketPlace = msg.sender;
        isBidStarted = false;
        isBidFinished = false;
    }
    
    //Defino modificadores
    modifier onlyMarketPlace(){
        if(marketPlace != msg.sender)
            revert();
        _;
    }
    
    modifier onlyIfNotStarted(){
        if(isBidStarted == true)
            revert();
        _;
    }
    
     modifier onlyIfNotFinished(){
        if(isBidFinished == true)
            revert();
        _;
    }
    
    modifier onlyIfStarted(){
        if(isBidStarted == false)
            revert();
        _;
    }
    
    //Defino funciones
        // Comprar tokens
        function buyTokens(uint _tokensToBuy) payable onlyIfNotFinished(){
            uint amount = _tokensToBuy * price;
            if (amount < msg.value){
                revert();
            }
            if (msg.value != amount){
                msg.sender.transfer(msg.value - amount);
            }
            agroTokens[msg.sender] += _tokensToBuy;
        }
        
        //Publicar una cosecha
        function placeBatch(uint _kilograms, string _name) onlyIfNotStarted(){
            batches[msg.sender].name = _name;
            batches[msg.sender].kilograms = _kilograms;
        }
        
        // Empezar la subasta
        function startBid() onlyMarketPlace() {
            isBidStarted = true;
        }
        
        // Comprar una cosecha
        function buyBatch(uint _offer, address _batchToBuy) onlyIfStarted(){
            if(_offer <  batches[_batchToBuy].price || _offer > agroTokens[msg.sender]){
                revert();
            }
            
            if (batches[_batchToBuy].finalOwner != 0){
                agroTokens[batches[_batchToBuy].finalOwner] += batches[_batchToBuy].price;
            }
            
            agroTokens[msg.sender] -= _offer;
            batches[_batchToBuy].price = _offer;
            batches[_batchToBuy].finalOwner = msg.sender;
        }
        
        //Finalizar la subasta
        function finishBid() onlyMarketPlace() {
            isBidFinished = true;
        }
        
        //Transferir ganancias al productor
        function transferProfit(){
            if (batches[msg.sender].price == 0){
                revert();
            }
            agroTokens[msg.sender] += batches[msg.sender].price;
            batches[msg.sender].price = 0;
        }
        
        // Canjear sus tokens por ether
        function refundTokens(uint _tokensToRefund) payable{
            if (agroTokens[msg.sender] < _tokensToRefund) {
                revert();
            }
            agroTokens[msg.sender] -= _tokensToRefund;
            msg.sender.transfer(_tokensToRefund * price);
        }
    
        // Retirar balance del contrato 
        function retire() payable onlyMarketPlace(){
            marketPlace.transfer(this.balance);
        }
        
}