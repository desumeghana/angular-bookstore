import { Component } from '@angular/core';
interface Product{
  "ISBN": number,
    "title": string,
    "author": string,
    "summary": string,
    "image": string,
    "price":{ "currency":string,
    "value": number,
    "displayValue": string},
}
interface cart{
  quantity:number;
  product:Product;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  books=[
    {
      "ISBN": 9780751542974,
      "title": "Best of me",
      "author": "Nicholas Sparks",
      "summary": "The new epic love story by the bestselling author of The Last Song and The Notebook. They were teenage sweethearts from opposite sides of the tracks - with a passion that would change their lives for ever. But life would force them apart. Years later, the lines they had drawn between past and present are about to slip.. Called back to their hometown for the funeral of the mentor who once gave them shelter when they needed it most, they are faced with each other once again and forced to confront the paths they chose. Can true love ever rewrite the past?",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/4/6/2/8/9200000001208264.jpg",
      "price": {
        "currency": "EUR",
        "value": 13.8,
        "displayValue": "13.80"
      }
    },
    {
      "ISBN": 9789000316090,
      "title": "Hotel aan zee",
      "author": "Maeve Binchy",
      "summary": "In de zomer is het gezellig druk in het badplaatsje Stoneybridge. Overal slenteren vakantiegangers rond en de stranden zijn bezaaid met emmers, schepjes en zandkastelen. Maar in de winter begeeft bijna niemand zich naar de prachtige stranden en de woeste kliffen die samen de ruige westkust van Ierland vormen. De enkeling die toch naar de kust gaat, kan niet om hotel Stone House heen. Daar kan iedere gast rekenen op een warm welkom van eigenaresse Chicky Starr, ongeacht de reden van zijn komst. Zo dragen Henry en Nicola een afschuwelijk geheim met zich mee, ziet de vrolijke verpleegkundige Winnie haar vakantie in het water vallen en komt John op de bonnefooi aanwaaien nadat hij zijn vlucht heeft gemist. De excentrieke Freda is paragnost - en parttime kapper. En dan is er nog Nora, een zwijgzame oudere dame die overal zo het hare van lijkt te denken. Hotel aan zee is een hartverwarmende roman met alle ingrediënten van een echte Maeve Binchy: warmte, humor en heerlijke personages met wie je graag je tijd doorbrengt!",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/2/1/0/9200000009850127.jpg",
      "price": {
        "currency": "EUR",
        "value": 14.99,
        "displayValue": "14.99"
      }
    },
    {
      "ISBN": 9789024561858,
      "title": "Inferno",
      "author": "Dan Brown",
      "summary": "Inferno, de vierde Robert Langdon-thriller, speelt zich af in Italië. `Hoewel ik al tijdens mijn studie Dantes Inferno heb gelezen, heb ik pas onlangs, toen ik onderzoek deed in Florence, echte waardering gekregen voor de invloed van Dantes werk op de moderne tijd,' verklaart Brown. `Ik verheug me erop in mijn nieuwe boek de lezers mee te nemen op een reis naar deze mysterieuze wereld, een landschap vol codes, symbolen en geheime doorgangen.'",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/9/9/9/9200000010839998.jpg",
      "price": {
        "currency": "EUR",
        "value": 17.49,
        "displayValue": "17.49"
      }
    },
    {
      "ISBN": 9789046113110,
      "title": "In het hart",
      "author": "David Baldacci",
      "summary": "Dit is het aangrijpende verhaal van de twaalfjarige Louisa Mae Cardinal, die in New York woont met haar verlegen broertje Oz. Het is 1940 en ze hebben het niet gemakkelijk, want het inkomen van hun vader, die schrijver is, is niet hoog. Maar dat kan Lou niet zoveel schelen, want ze aanbidt haar vader en is gek op zijn verhalen. Maar dan, in één verschrikkelijk moment, verandert Lou's leven voorgoed. Een auto-ongeluk maakt een einde aan hun vaders leven, waardoor zij en Oz moeten verhuizen naar het verre Virginia. Daar, in het isolement van de desolate bergen, komen ze te wonen bij hun excentrieke overgrootmoeder Louisa, Lou's naamgenote. Geplaatst tegenover nieuwe verantwoordelijkheden ziet Lou zich gedwongen snel volwassen te worden. Daar, op haar overgrootmoeders eenvoudige boerderij, op het land waarvan haar vader zo hield en waarover hij steeds weer schreef, ontdekt zij wie zij werkelijk is en wat zij kan betekenen voor deze wereld. En wanneer een vernietigend noodlot hun nieuwe huis treft kan zij de strijd die volgt het hoofd bieden; een strijd die gaat om recht en overleving en die gestreden wordt in een overvolle rechtszaal in Virginia...",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/6/2/1/1001004005971262.jpg",
      "price": {
        "currency": "EUR",
        "value": 5,
        "displayValue": "5.00"
      }
    },
    {
      "ISBN": 9781447229902,
      "title": "The Hit",
      "author": "David Baldacci",
      "summary": "The trap is set. Failure is not an option. When government hit man Will Robie is given his next target he knows he’s about to embark on his toughest mission yet. He is tasked with killing one of their own, following evidence to suggest that fellow assassin Jessica Reel has been turned. She’s leaving a trail of death in her wake including her handler. The trap is set. To send a killer to catch a killer. But what happens when you can’t trust those who have access to the nation’s most secret intelligence?",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/5/2/3/9200000009123256.jpg",
      "price": {
        "currency": "EUR",
        "value": 21.99,
        "displayValue": "21.99"
      }
    },
    {
      "ISBN": 9789044339482,
      "title": "De Tennisparty",
      "author": "Sophie Kinsella",
      "summary": "Het tennisweekend is Patricks idee. Zijn nieuwe landhuis, gekocht met de bonussen van zijn baan als beleggingsadviseur, is de ideale locatie. Patricks vrouw Caroline weet nog niet wat de werkelijke reden voor het feestje is. Zij vindt het leuk om haar oude buren Stephen en Annie weer te zien, maar ze is minder blij met de snoeverige Charles en zijn verwende vrouw Cressida. En het laatste koppel, Don en Valerie, beiden bloedfanatiek, is helemaal onuitstaanbaar. Terwijl de vier stellen zich op het zonnige terras installeren, lijkt al vast te staan wie de winnaars zijn in het leven en wie de verliezers. Maar wanneer de eerste bal over het net wordt geslagen, is dat het begin van twee dagen flirten, driftbuien, knallende ruzies en schokkende onthullingen. Door de komst van een ongenode gast wordt duidelijk dat dit weekend helemaal niets met tennis te maken heeft. Lang voordat ze beroemd werd met haar Shopaholic! serie schreef Sophie Kinsella onder haar eigen naam, Madeleine Wickham, zeven romans. De tennis party, haar allereerste boek, verscheen toen ze pas vierentwintig was en is daarom altijd heel bijzonder voor haar gebleven. Daarna volgden onder andere Het zwemfeestje en De vraagprijs. Haar werk is in meer dan dertig talen verschenen. De auteur woont met haar man en kinderen in Londen. 'Een rake roman met scherpe observaties. Licht maar dodelijk.' Mail on Sunday",
      "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/7/6/4/9200000009984673.jpg",
      "price": {
        "currency": "EUR",
        "value": 18.5,
        "displayValue": "18.50"
      }
    }
  ]
  cartItems:Array<cart>=[];
  finalPrice:number=0;
  insertProduct(e:Product)
  {
    
    let idx=this.cartItems.findIndex(obj=>obj.product.ISBN===e.ISBN);

    if(idx!==-1)
    {
      this.cartItems[idx].quantity++;
    }
    else
    {
      const temp: cart = {
        quantity: 1,
        product: e,
      };
      this.cartItems.push(temp);
    }
    if(this.cartItems.length==0)
    {
      this.finalPrice=0;
    }
    else{
      this.finalPrice=this.finalPrice+e.price.value;
    }
  }

  removeProduct(isbn:number)
  {
    let idx=this.cartItems.findIndex(obj=>obj.product.ISBN===isbn);
    let item=this.cartItems.find(obj=>obj.product.ISBN===isbn);
    if(this.cartItems.length==1)
    {
      this.finalPrice=0;
    }
    else{
      this.finalPrice=this.finalPrice-item?.product?.price?.value!;
    }
    this.cartItems.splice(idx,1);

  }
  addquantity(isbn:number)
  {
    let idx=this.cartItems.findIndex(obj=>obj.product.ISBN===isbn);
    this.cartItems[idx].quantity++;
    this.finalPrice=this.finalPrice+this.cartItems[idx].product.price.value;
  }
  subtractquantity(isbn:number)
  {
    let idx=this.cartItems.findIndex(obj=>obj.product.ISBN===isbn);
    if(this.cartItems[idx].quantity===1)
    {
      this.removeProduct(isbn);
    }
    else
    {
      this.cartItems[idx].quantity--;
      this.finalPrice=this.finalPrice-this.cartItems[idx].product.price.value;
    }
  }
}
