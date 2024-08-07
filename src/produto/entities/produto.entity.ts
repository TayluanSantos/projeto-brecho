import { TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Transform } from "stream";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name:'tb_produtos'})
export class Produto {
    @PrimaryGeneratedColumn() 
    id: number;


    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @Column({length: 10, nullable: false})
    tamanho: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2, nullable: false})
    preco: number;

    @Column({length: 5000})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria; 
}