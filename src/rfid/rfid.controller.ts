import {
  Controller,
  Get,
  Res,
  Req,
  HttpStatus,
  Delete,
  Param,
  HttpCode,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { RfidService } from "./rfid.service";
import { Response, Request } from "express";
import { CreateTagsDto } from "./dto/createTags.dto";
@Controller("rfid")
export class RfidController {
  constructor(private rfidService: RfidService) {}
  @Get("tags")
  async findAll(@Res() res: Response, @Req() req: Request) {
    const tagsList = await this.rfidService.findAll();
    return res.status(HttpStatus.OK).json(tagsList);
  }

  @Post("tags")
  @UsePipes(new ValidationPipe())
  async create(@Body() createTagsDto: CreateTagsDto) {
    return await this.rfidService.create(createTagsDto);
  }

  @Delete("tags/:id")
  @HttpCode(204)
  async findByDelete(@Param("id") id: string) {
    await this.rfidService.findByDelete(id);
  }
}
