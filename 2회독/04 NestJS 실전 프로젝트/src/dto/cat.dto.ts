import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from 'src/cats/cats.schema';

// 리턴시 상속받은 Cat 스키마에서 패스워드같은경우는 필요하지 않으므로 PickType을 사용해 스키마에서 필요한것만 pick 해서 가져온다.
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'email',
    required: true,
  })
  id: string;
}
