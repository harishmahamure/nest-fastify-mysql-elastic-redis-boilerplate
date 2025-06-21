import { applyDecorators, UseGuards } from '@nestjs/common';
import { UserRole } from 'src/modules/auth/role.enum';
import { Roles } from 'src/modules/auth/roles.decorator';
import { RolesGuard } from 'src/modules/auth/roles.guard';

export const ApplyAdminDecorators = () => {
  return applyDecorators(UseGuards(RolesGuard), Roles(UserRole.ADMIN));
};

export const ApplyUserDecorators = () => {
  return applyDecorators(
    UseGuards(RolesGuard),
    Roles(UserRole.USER, UserRole.ADMIN),
  );
};
