import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrpy from 'bcrypt';
import { Model } from 'mongoose';
import { CatRequestDto } from 'src/dto/cats.request.dto';
import { Cat } from './cats.schema';

@Injectable()
export class CatsService {
  // 스키마를 서비스에서 사용하기 위해 DI를 해준다.
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catModel.exists({ email });

    if (isCatExist) {
      // 403 에러 발생시켜주는 자동화된 클래스
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
    }

    const hashedPassword = await bcrpy.hash(password, 10);
    const cat = await this.catModel.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }
}
