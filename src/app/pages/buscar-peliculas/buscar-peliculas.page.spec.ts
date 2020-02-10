import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarPeliculasPage } from './buscar-peliculas.page';

describe('BuscarPeliculasPage', () => {
  let component: BuscarPeliculasPage;
  let fixture: ComponentFixture<BuscarPeliculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPeliculasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
