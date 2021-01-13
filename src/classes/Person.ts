export class Person {
  identifier: string;
  kindIdentifier: string;
  name: string;
  faherLastname: string;
  motherLastname: string;
  birthDate: string;
  gender: string;
  insured: string;
  plan: string;
  cellphone: string;
  agreeWithDataPolicy: boolean;
  agreeWithCommunicationPolicy: boolean;
  relatives: { relationship: string; birthDte: string }[];
  relationships: string;
  relativeBirthDate: string;

  constructor() {
    this.identifier = "";
    this.kindIdentifier = "";
    this.name = "";
    this.faherLastname = "";
    this.motherLastname = "";
    this.birthDate = "";
    this.gender = "";
    this.insured = "";
    this.plan = "basic";
    this.cellphone = "";
    this.agreeWithDataPolicy = false;
    this.agreeWithCommunicationPolicy = false;
    this.relatives = [];
    this.relationships = "";
    this.relativeBirthDate = "";
  }

  getData() {
    return {
      identifier: this.identifier,
      kindIdentifier: this.kindIdentifier,
      name: this.name,
      faherLastname: this.faherLastname,
      motherLastname: this.motherLastname,
      birthDate: this.birthDate,
      gender: this.gender,
      insured: this.insured,
      plan: this.plan,
      relatives: this.relatives,
    };
  }
}
