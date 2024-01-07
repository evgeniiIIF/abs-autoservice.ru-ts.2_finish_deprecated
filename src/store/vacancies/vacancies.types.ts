import type { VacanciesResponse } from '~/api/http/vacanciesHttp/vacanciesHttp.types';

export type VacanciesState = VacanciesResponse['data'] & { vacancies_items: VacanciesResponse['vacancies_item'] };
