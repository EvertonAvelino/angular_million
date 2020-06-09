export class Cliente{

   public _id: string 
   public  nome:  string
   public  sobrenome: string
   public  cpf: string
   public  login: string
   public  createat: string
   public  updatetat: string

   public todos():Cliente[]{
       return []
   }
   public fazerLogin(calback):void{
    
    calback.call()
    }
}; 